import Image from "next/image";
import "./Amk.css";

const Amk = () => {
  console.log('Hello World');
  return (
    <div>
      {/* Section 1 */}
      <div className="section-1">
        {/* Header */}
        <div className="header">Hello World</div>
        {/* Content */}
        <div>
          <Image src="/amk/next.svg" alt={""} width={100} height={100}></Image>
        </div>
        {/* Footer */}
        <div></div>
      </div>
      {/* Section 2 */}
      <div className="section-2">
         {/* Header */}
         <div></div>
        {/* Content */}
        <div></div>
        {/* Footer */}
        <div></div>
      </div>
    </div>
  )
}

export default Amk;