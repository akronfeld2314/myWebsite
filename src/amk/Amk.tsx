import Image from "next/image";
import "./Amk.css";

const Amk = () => {
  console.log('Hello World');
  return (
    <div>
      {/* Header */}
      <div>TOOLBAR</div>
      {/* Section 1 */}
      <div className="section ">
        <div>
          <Image className="portrait" src="/website2.0/portrait.svg" alt={""} width={200} height={400}></Image>
        </div>
      </div>
      {/* Section 2 */}
      <div className="section"></div>
    </div>
  )
}

export default Amk;