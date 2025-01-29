import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { FaqGenerator } from "../FaqGenerator";
import { useAuth } from "@/lib/auth";

// Mock the auth hook
jest.mock("@/lib/auth", () => ({
  useAuth: jest.fn(),
}));

// Mock Stripe
jest.mock("@stripe/stripe-js", () => ({
  loadStripe: () => Promise.resolve({ redirectToCheckout: jest.fn() }),
}));

describe("FaqGenerator", () => {
  const mockUseAuth = useAuth as jest.Mock;

  beforeEach(() => {
    mockUseAuth.mockReturnValue({
      hasPaid: false,
      setHasPaid: jest.fn(),
    });
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the form correctly", () => {
    render(<FaqGenerator />);

    expect(screen.getByLabelText(/product description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/target audience/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/pain points/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/tone/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /generate faq/i })
    ).toBeInTheDocument();
  });

  it("shows payment button when user has not paid", () => {
    render(<FaqGenerator />);

    const button = screen.getByRole("button", {
      name: /generate faq - \$4\.99/i,
    });
    expect(button).toBeInTheDocument();
  });

  it("shows generate button when user has paid", () => {
    mockUseAuth.mockReturnValue({
      hasPaid: true,
      setHasPaid: jest.fn(),
    });

    render(<FaqGenerator />);

    const button = screen.getByRole("button", { name: /generate faq$/i });
    expect(button).toBeInTheDocument();
  });

  it("initiates payment process when form is submitted without payment", async () => {
    const mockFetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ sessionId: "test_session_id" }),
    });
    global.fetch = mockFetch;

    render(<FaqGenerator />);

    fireEvent.change(screen.getByLabelText(/product description/i), {
      target: { value: "Test product" },
    });

    fireEvent.submit(
      screen.getByRole("button", { name: /generate faq - \$4\.99/i })
    );

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith(
        "/api/create-checkout-session",
        expect.any(Object)
      );
    });
  });

  it("generates FAQ when form is submitted with payment", async () => {
    mockUseAuth.mockReturnValue({
      hasPaid: true,
      setHasPaid: jest.fn(),
    });

    const mockFetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ faq: "### Test FAQ" }),
    });
    global.fetch = mockFetch;

    render(<FaqGenerator />);

    fireEvent.change(screen.getByLabelText(/product description/i), {
      target: { value: "Test product" },
    });

    fireEvent.submit(screen.getByRole("button", { name: /generate faq$/i }));

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith(
        "/api/generate",
        expect.any(Object)
      );
    });
  });

  it("shows error message when generation fails", async () => {
    mockUseAuth.mockReturnValue({
      hasPaid: true,
      setHasPaid: jest.fn(),
    });

    const mockFetch = jest.fn().mockResolvedValue({
      ok: false,
    });
    global.fetch = mockFetch;

    render(<FaqGenerator />);

    fireEvent.change(screen.getByLabelText(/product description/i), {
      target: { value: "Test product" },
    });

    fireEvent.submit(screen.getByRole("button", { name: /generate faq$/i }));

    await waitFor(() => {
      expect(screen.getByText(/failed to generate faq/i)).toBeInTheDocument();
    });
  });
});
