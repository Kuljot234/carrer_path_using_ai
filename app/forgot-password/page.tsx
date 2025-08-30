import type { Metadata } from "next"
import ForgotPasswordClientPage from "./ForgotPasswordClientPage"

export const metadata: Metadata = {
  title: "Forgot Password - Career Path Predictor",
  description: "Reset your Career Path Predictor account password",
}

export default function ForgotPasswordPage() {
  return <ForgotPasswordClientPage />
}
