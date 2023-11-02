import Image from "next/image"
import Iso14001 from '../../../public/iso/14001-v1.svg'
import Iso14001V2 from '../../../public/iso/14001-v2.svg'
import Iso45001 from '../../../public/iso/45001-v1.svg'
import Iso45001V2 from '../../../public/iso/45001-v2.svg'
import Iso9001 from '../../../public/iso/9001-v1.svg'
import Iso9001V2 from '../../../public/iso/9001-v2.svg'

export default function IsoIcons() {
    return (
        <div className='flex items-center gap-3 px-3'>
            <Image src={Iso9001} alt='iso 9001' width={40} height={40} ></Image>
            <Image src={Iso14001} alt='iso 9001' width={40} height={40} ></Image>
            <Image src={Iso45001} alt='iso 9001' width={40} height={40} ></Image>
        </div>
    )
}

export function IsoIconsV2() {
    return (
        <div className='flex items-center gap-3 px-3'>
            <Image src={Iso9001V2} alt='iso 9001' width={96} height={96} ></Image>
            <Image src={Iso14001V2} alt='iso 9001' width={96} height={96} ></Image>
            <Image src={Iso45001V2} alt='iso 9001' width={96} height={96} ></Image>
        </div>
    )
}