import Image from "next/image";
import LogoDetail from '../../public/assets/manufacturers/Logo-detail-image.svg'

export default function MovementImage(
  {
    image,
    alignment
  }:{
    image: any;
    alignment: 'left' | 'right'
  }
) {
  return(
    <div className="relative animate-idle-slow">

      {alignment == 'left' && <Image src={image} alt='Logo detail' width={512} height={512} quality={100} priority className='absolute left-12 animate-idle'/> }

      {alignment == 'right' && <Image src={image} alt='Logo detail' width={512} height={512} quality={100} priority className='absolute right-12 animate-idle'/> }
      
      <Image alt='Image' src={LogoDetail} width={512} height={512} quality={100} priority />
    </div>
  )
}