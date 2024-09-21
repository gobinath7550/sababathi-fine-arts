import Image from "next/image";
import Header from "../global/Header";
import {
  WhatsApp_Svg,
  Instagram_Svg,
  Facebook_Svg,
  Youtube_Svg,
  Heart_Positive,
  Heart_Negative,
} from "../svg-icons";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <main className="w-full">
        <div className="bg-[url('/images/banner-images/banner-img-2.jpg')] bg-scroll bg-center bg-no-repeat bg-cover w-full">
          <div className="bg-black/40 max-sm:min-h-[25rem] min-h-[35rem] lg:min-h-[45rem] flex items-center justify-start">
            <div className="xl:max-w-[70rem] w-full m-auto p-7">
              <div className="flex flex-col gap-2 w-fit mt-10">
                <span className="font-extrabold text-[calc(100vw-92vw)] xl:text-[94px] leading-none text-white tracking-widest uppercase">
                  {"Sababathi"}
                </span>
                <span className="font-extrabold text-orange-100 mx-2 text-[calc(100vw-97vw)] xl:text-[44px] leading-none tracking-[0.2em] text-left flex justify-end">
                  {"Fine Arts"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:max-w-[70rem] m-auto p-7 my-8">
          <h3 className="uppercase text-[20px] font-extrabold tracking-wide">
            {"About US"}
          </h3>
          <p className="pt-4 text-justify text-gray-900 tracking-widest indent-11 mx-1 leading-loose text-sm">
            {`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`}
          </p>
        </div>
        <div className="bg-slate-900">
          <div className="xl:max-w-[70rem] m-auto p-7">
            <h3 className="px-2 text-center uppercase text-[20px] text-white font-extrabold tracking-wide">
              {"What we can do"}
            </h3>
            <div className="grid grid-cols-3 max-md:grid-cols-1 justify-between px-2 mt-6 gap-9">
              <div className="rounded-md bg-gray-200">
                <div className="max-h-48 overflow-hidden">
                  <Image
                    src="/images/usp-img-1.jpg"
                    alt="G"
                    width={385}
                    height={135}
                    className="object-cover rounded-md w-full"
                    priority
                  />
                </div>
                <div className="p-5 text-gray-700 text-sm text-justify rounded-b-md">
                  {
                    "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
                  }
                </div>
              </div>
              <div className="rounded-md bg-gray-200">
                <div className="max-h-48 overflow-hidden">
                  <Image
                    src="/images/usp-img-2.jpg"
                    alt="G"
                    width={385}
                    height={135}
                    className="object-cover rounded-md w-full"
                    priority
                  />
                </div>
                <div className="p-5 text-gray-700 text-sm text-justify rounded-b-md">
                  {
                    "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC."
                  }
                </div>
              </div>
              <div className="rounded-md bg-gray-200">
                <div className="max-h-48 overflow-hidden">
                  <Image
                    src="/images/usp-img-3.jpg"
                    alt="G"
                    width={385}
                    height={135}
                    className="object-cover rounded-md w-full"
                    priority
                  />
                </div>
                <div className="p-5 text-gray-700 text-sm text-justify rounded-b-md">
                  {
                    "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:max-w-[70rem] m-auto p-7 my-8">
          <h3 className="px-2 uppercase text-[20px] text-black font-extrabold tracking-wide">
            {"Testimonials"}
          </h3>
          <div className="sm:px-14 mt-14">
            <div className="flex items-center justify-center sm:px-14">
              <Image
                src="/images/awards-left.png"
                alt="G"
                width={100}
                height={135}
                className="object-cover rotate-[14deg] max-md:w-[60px] max-md:h-[90px]"
                priority
              />
              <div className="flex flex-col md:gap-2 max-md:gap-3">
                <div className="flex items-center justify-center gap-2">
                  <div className="border-2 border-slate-800 rounded-full">
                    <Image
                      src="/images/customer.jpg"
                      alt="G"
                      width={40}
                      height={40}
                      className="object-cover rounded-full"
                      priority
                    />
                  </div>
                  <div className="text-slate-800 leading-none flex flex-col">
                    <span className="font-extrabold text-[16px]">
                      {"Robert C"}
                    </span>
                    <span className="font-normal text-[11px] ml-[1px]">
                      {"Canada, USA"}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <span className="flex w-5 h-5">
                    <Heart_Positive />
                  </span>
                  <span className="flex w-5 h-5">
                    <Heart_Positive />
                  </span>
                  <span className="flex w-5 h-5">
                    <Heart_Positive />
                  </span>
                  <span className="flex w-5 h-5">
                    <Heart_Positive />
                  </span>
                  <span className="flex w-5 h-5">
                    <Heart_Negative />
                  </span>
                </div>
                <p className="text-center max-md:hidden italic text-sm">
                  {
                    '"The room was smaller than expected, and the service at the restaurant was slow. However, the location is great, and the staff was friendly. There&apos;s definitely room for improvement".'
                  }
                </p>
              </div>
              <Image
                src="/images/awards-right.png"
                alt="G"
                width={100}
                height={135}
                className="object-cover -rotate-[14deg] max-md:w-[60px] max-md:h-[90px]"
                priority
              />
            </div>
            <p className="text-center max-md:pt-6 md:hidden italic text-sm">
              {
                '"The room was smaller than expected, and the service at the restaurant was slow. However, the location is great, and the staff was friendly. There&apos;s definitely room for improvement".'
              }
            </p>
          </div>
        </div>
      </main>
      <footer className="bg-slate-900 text-white w-full">
        <div className="xl:max-w-[70rem] m-auto p-7 my-8">
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10">
            <div className="">
              <form
                action=""
                className="flex flex-col justify-between h-full gap-3"
              >
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    name="user_name"
                    className="min-h-9 bg-transparent p-2 border-[1px] tracking-wider leading-3 text-sm placeholder:text-gray-600"
                    placeholder="Name"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <input
                    type="email"
                    name="user_email"
                    className="min-h-9 bg-transparent p-2 border-[1px] tracking-wider leading-3 text-sm placeholder:text-gray-600"
                    placeholder="Email"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <textarea
                    className="min-h-9 bg-transparent p-2 border-[1px] tracking-wider leading-3 text-sm placeholder:text-gray-600"
                    placeholder="Feedback"
                  ></textarea>
                </div>
                <button className="bg-blue-600 p-4 tracking-wider font-semibold leading-3 text-sm">
                  {"Send"}
                </button>
              </form>
            </div>
            <div>
              <h3 className="tracking-wider font-semibold leading-3 text-md uppercase">
                {"Contacts"}
              </h3>
              <div className="flex flex-col items-start justify-between h-full">
                <address className="text-gray-400 mt-3 text-sm tracking-wider">
                  {"Sababathi Fne Arts Private Limited,"} <br />
                  {"14, Vel Road,"}
                  <br />
                  {"Chennai - 600096. Tamilnadu. INDIA"}
                  <br />
                  {"Phone : +91-4562-220141, 221141"}
                  <br />
                  {"Fax : +91-4562-223141"}
                  <br />
                </address>
                <ul className="flex gap-3 mb-3">
                  <li className="bg-[#0d0029] group cursor-pointer hover:bg-blue-600 border-2 border-transparent hover:border-2 hover:border-[#0d0029] rounded-full p-[8px] shadow-xl w-10 h-10 transition-all">
                    <WhatsApp_Svg />
                  </li>
                  <li className="bg-[#0d0029] group cursor-pointer hover:bg-blue-600 border-2 border-transparent hover:border-2 hover:border-[#0d0029] rounded-full p-[8px] shadow-xl w-10 h-10 transition-all">
                    <Instagram_Svg />
                  </li>
                  <li className="bg-[#0d0029] group cursor-pointer hover:bg-blue-600 border-2 border-transparent hover:border-2 hover:border-[#0d0029] rounded-full p-[8px] shadow-xl w-10 h-10 transition-all">
                    <Facebook_Svg />
                  </li>
                  <li className="bg-[#0d0029] group cursor-pointer hover:bg-blue-600 border-2 border-transparent hover:border-2 hover:border-[#0d0029] rounded-full p-[8px] shadow-xl w-10 h-10 transition-all">
                    <Youtube_Svg />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:max-w-[70rem] m-auto my-4">
          <p className="text-center text-gray-400 text-sm tracking-wider">
            {"Copyright © Sababathi Fine Arts"}
          </p>
        </div>
      </footer>
    </div>
  );
}
