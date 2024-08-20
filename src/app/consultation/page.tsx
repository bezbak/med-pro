import CustomCalendar from "@/components/CustomCalendar"
import ReserveDoctor from "@/components/ReserveDoctor"
import ReserveTime from "@/components/ReserveTime"




type Props = {}

const Page = (props: Props) => {
    
  return (
    <div className="flex gap-[34px]">
        <div className="w-2/5 flex flex-col gap-[42px]">
        <CustomCalendar/>
        <ReserveTime/>
        </div>
        <div className="w-3/5">
        <ReserveDoctor/>
        
        </div>
    </div>
  )
}

export default Page