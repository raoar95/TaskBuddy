import { memo, useCallback, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

/* Components */
import { Submit } from "./FormComponent";

/* Utils */
import { generateRandomText } from "../../utils/RandomFunctions";

/* Styles */
import "./OtpInput.scss";
import { verifyResetOtp } from "../../service/api";

/* Interface */
interface IOtpSubmit {
  size: number;
  otpId: string;
}

const OtpInput = ({ size, otpId }: IOtpSubmit) => {
  const [otp, setOtp] = useState<string[]>(Array(size).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const history = useHistory();

  const handleOtpChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const { value } = e.target;

      if (!/^\d?$/.test(value)) return; // Allow only single digit numbers

      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = value;
        return newOtp;
      });

      // Focus on next input if available
      if (value && index < size - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    },
    [size]
  );

  const handleEraseOtp = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
      if (e.key === "Backspace" && index > 0) {
        setOtp((prevOtp) => {
          const newOtp = [...prevOtp];
          newOtp[index] = "";
          return newOtp;
        });

        inputRefs.current[index]?.value &&
          (inputRefs.current[index].value = "");
        inputRefs.current[index - 1]?.focus();
      }
    },
    [otp]
  );

  const handleOtpSubmit = useCallback(
    async (e: React.MouseEvent<HTMLInputElement>) => {
      const invalidOtp = otp.includes("");

      if (invalidOtp) {
        e.preventDefault();
        console.log("Please enter a valid OTP.");
        return;
      }
      e.preventDefault();
      // console.log("OTP: ", otp.join(""));

      const inputOtp = otp.join("");
      const randomText = generateRandomText(90);

      console.log("Input OTP: ", typeof inputOtp);

      if (otpId) {
        let isOtpVerified = await verifyResetOtp({ otp: inputOtp }).catch(
          (err) => console.log(err)
        );

        if (!isOtpVerified) return;

        switch (otpId) {
          case "reset":
            history.push(`/reset-password/${randomText}`);
            break;

          case "otpLogin":
            history.push("/");
            break;

          default:
            break;
        }
      }

      // if (otpId === "reset") {
      //   console.log("OTP ID: ", otpId);
      //   history.push(`/reset-password/${generateRandomText(90)}`);
      // }

      // if (otpId === "otpLogin") {
      //   console.log("OTP ID: ", otpId);
      //   history.push("/");
      // }
    },
    [otp]
  );

  return (
    <form method="post" className="otp_input_container">
      <div className="otp_input_wrapper flex flex-space">
        {Array.from({ length: size }).map((_, index) => (
          <input
            ref={(el) => (inputRefs.current[index] = el)}
            key={index}
            type="text"
            className={`otp_digit otp_field_${index + 1}`}
            pattern="[0-9]"
            maxLength={1}
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(
                /[^0-9]/g,
                ""
              );
            }}
            onChange={(e) => handleOtpChange(e, index)}
            onKeyDown={(e) => handleEraseOtp(e, index)}
          />
        ))}
      </div>
      <Submit onClick={(e) => handleOtpSubmit(e)} />
    </form>
  );
};

export default memo(OtpInput);
