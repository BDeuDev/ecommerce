import { JwtPayload } from "jsonwebtoken";

interface TokenVerificationResult {
    valid: boolean;
    data?: JwtPayload;
    error?: string;
}
export default TokenVerificationResult