import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/style.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { dM_Sans, } from '@/lib/font'
export const metadata = {
    title: 'SmartLibrary',
    description: 'Smart RFID Solutions for Libraries, Archives, and Education',
    icons: {
        icon: '/favicon.ico',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${dM_Sans.variable}`}>
            <body>{children}</body>
        </html>
    )
}
