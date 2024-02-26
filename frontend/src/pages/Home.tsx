import heroImg from "../assets/hero.png"
import landingImg from "../assets/landing.png"
import appDownloadImg from "../assets/appDownload.png"
import Footer from "@/components/common/Footer"

const Home = () => {
  return (
    <div className="w-full">
        {/* hero section */}
       <div className="w-full">
        <img src={heroImg} className="w-full max-h-[600px] object-cover z-10"/>
       </div>

       <div className="max-w-[1260px] w-[90%]  flex items-center justify-center relative mx-auto mb-36">
       <div className="md:px-32 w-[90%] absolute -top-10 px-3 bg-white rounded-lg shadow-md  py-8 flex flex-col gap-5 text-center ">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeway today
        </h1>
        <span className="text-xl">Food is just a click away!</span>

      </div>
      </div>

       <div className="max-w-[1260px] mx-auto py-6">
       <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImg} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the MernEats App for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownloadImg} />
        </div>
      </div>
       </div>

       <Footer/>
    </div>
  )
}

export default Home
