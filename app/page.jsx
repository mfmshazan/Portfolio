import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">homepage
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span>Software Developer</span>
            <h1 className="text-[20px] xl:text-[30px] font-semibold leading-[1.5]">
              Hello I'm <br/>
              <span className="name">Shazan Faslan</span>
            </h1>
          </div>
          <div>Photo</div>
        </div>
      </div>

    </section>
  )
}

export default Home

