import Button from "@/components/Button";
import { professorResumeInfos } from "@/constants/dashboard/resume-br";

const BalanceBox = () => {
  return (
    <div className="w-full p-9 bg-green-primary rounded-2xl shadow-md shadow-[rgba(0,0,0,0.25)]">
      <div className="w-full flex flex-col gap-y-4">
        <div className="w-full flex flex-col gap-y-2">
          <span className="text-lg text-white font-semibold">
            {professorResumeInfos.availableBalanceInfo}
          </span>

          <span className="text-2xl text-white font-semibold">R$ 0,00</span>
        </div>

        <Button primaryMobile fullWidth onClick={() => {}} label={professorResumeInfos.redeemBtn} />
      </div>
    </div>
  );
};

export default BalanceBox;
