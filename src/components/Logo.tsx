import Link from 'next/link'
import React from 'react'
import { joinClassNames } from '../lib/joinClassNames'

interface LogoProps {
  className?: string
  href?: string
}

export const Logo = (props: LogoProps) => {
  return (
    <Link href={props.href || '/'}>
      <a className={joinClassNames(props.className || '', 'cursor-pointer')}>
        <svg
          width="94"
          height="27"
          viewBox="0 0 94 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 22.0071C0 22.5594 0.447715 23.0071 1 23.0071H2.76424C3.31652 23.0071 3.76424 22.5594 3.76424 22.0071V13.6173C3.76424 11.6 5.28241 10.1754 7.24772 10.1754C7.40981 10.1754 7.56173 10.1856 7.70503 10.204C8.28214 10.2781 8.90825 10.0433 9.11176 9.4982L9.6147 8.15103C9.78047 7.707 9.61473 7.19373 9.16757 7.03661C8.75282 6.89088 8.28193 6.80633 7.75724 6.80633C5.93916 6.80633 4.43561 7.82097 3.83794 9.62976C3.8248 9.66955 3.78773 9.6971 3.74582 9.6971C3.69282 9.6971 3.64986 9.65413 3.64986 9.60113V8.03509C3.64986 7.48281 3.20214 7.03509 2.64986 7.03509H1C0.447715 7.03509 0 7.48281 0 8.03509V22.0071Z"
            fill="#111827"
          />
          <path
            d="M17.8092 23.3191C21.0305 23.3191 23.3797 21.9565 24.3853 19.7906C24.6384 19.2454 24.2282 18.6637 23.6309 18.5965L22.0138 18.4147C21.5591 18.3636 21.1428 18.6401 20.8815 19.0157C20.2533 19.9185 19.1812 20.3867 17.8612 20.3867C15.7438 20.3867 14.2485 19.1741 13.8754 17.0573C13.7788 16.509 14.2397 16.0505 14.7965 16.0505H23.9114C24.4636 16.0505 24.9114 15.6028 24.9114 15.0505V14.8963C24.9114 9.29156 21.5423 6.82713 17.6116 6.82713C13.0363 6.82713 10.052 10.1858 10.052 15.1147C10.052 20.1267 12.9947 23.3191 17.8092 23.3191ZM14.8531 13.5133C14.2788 13.5133 13.8113 13.0231 13.9818 12.4747C14.4635 10.9244 15.8129 9.75949 17.6636 9.75949C19.4778 9.75949 20.7945 10.8715 21.1842 12.5126C21.3127 13.0536 20.8495 13.5133 20.2935 13.5133H14.8531Z"
            fill="#111827"
          />
          <path
            d="M30.515 22.279C30.6367 22.7097 31.0298 23.0071 31.4774 23.0071H33.8911C34.3404 23.0071 34.7345 22.7074 34.8547 22.2745L37.6169 12.3187C37.6342 12.2566 37.6908 12.2135 37.7553 12.2135C37.8198 12.2135 37.8764 12.2566 37.8937 12.3187L40.656 22.2745C40.7761 22.7074 41.1703 23.0071 41.6196 23.0071H44.0233C44.4707 23.0071 44.8636 22.71 44.9855 22.2796L48.9424 8.30758C49.1232 7.66927 48.6437 7.03509 47.9803 7.03509H46.2379C45.7782 7.03509 45.3777 7.34848 45.2672 7.79469L42.7082 18.127C42.6972 18.1717 42.6571 18.203 42.611 18.203C42.5653 18.203 42.5255 18.1721 42.5141 18.1278L39.8564 7.7862C39.7428 7.34414 39.3443 7.03509 38.8879 7.03509H36.6446C36.1877 7.03509 35.7888 7.3448 35.6757 7.7875L33.016 18.1951C33.0054 18.2365 32.9681 18.2654 32.9254 18.2654C32.8825 18.2654 32.8451 18.2362 32.8347 18.1946L30.2342 7.79256C30.1229 7.34739 29.723 7.03509 29.2641 7.03509H27.5295C26.8664 7.03509 26.3869 7.66882 26.5672 8.307L30.515 22.279Z"
            fill="#111827"
          />
          <path
            d="M51.3454 22.0071C51.3454 22.5594 51.7931 23.0071 52.3454 23.0071H54.1096C54.6619 23.0071 55.1096 22.5594 55.1096 22.0071V13.6173C55.1096 11.5896 56.6382 10.1546 58.7075 10.1546C58.8335 10.1546 58.9657 10.1591 59.0992 10.1672C59.7764 10.2081 60.4544 9.67815 60.4544 8.99967V7.74489C60.4544 7.2616 60.1073 6.85092 59.6249 6.82291C59.4409 6.81222 59.2592 6.80633 59.1026 6.80633C57.2948 6.80633 55.7812 7.82097 55.1833 9.62977C55.1702 9.66955 55.1331 9.6971 55.0912 9.6971C55.0382 9.6971 54.9952 9.65413 54.9952 9.60113V8.03509C54.9952 7.48281 54.5475 7.03509 53.9952 7.03509H52.3454C51.7931 7.03509 51.3454 7.48281 51.3454 8.03509V22.0071Z"
            fill="#111827"
          />
          <path
            d="M62.3696 22.0071C62.3696 22.5594 62.8173 23.0071 63.3696 23.0071H65.1338C65.6861 23.0071 66.1338 22.5594 66.1338 22.0071V8.03509C66.1338 7.48281 65.6861 7.03509 65.1338 7.03509H63.3696C62.8173 7.03509 62.3696 7.48281 62.3696 8.03509V22.0071ZM64.2621 4.76823C65.4579 4.76823 66.4354 3.85317 66.4354 2.73013C66.4354 1.5967 65.4579 0.681641 64.2621 0.681641C63.0559 0.681641 62.0784 1.5967 62.0784 2.73013C62.0784 3.85317 63.0559 4.76823 64.2621 4.76823Z"
            fill="#111827"
          />
          <path
            d="M77.3946 8.03509C77.3946 7.48281 76.9469 7.03509 76.3946 7.03509H75.2439C74.6916 7.03509 74.2439 6.58738 74.2439 6.03509V4.20846C74.2439 3.65618 73.7962 3.20846 73.2439 3.20846H71.4796C70.9274 3.20846 70.4796 3.65618 70.4796 4.20846V6.03509C70.4796 6.58738 70.0319 7.03509 69.4796 7.03509H69.2128C68.6605 7.03509 68.2128 7.48281 68.2128 8.03509V8.94666C68.2128 9.49894 68.6605 9.94666 69.2128 9.94666H69.4796C70.0319 9.94666 70.4796 10.3944 70.4796 10.9467V18.8269C70.4588 21.8321 72.6425 23.3087 75.4709 23.2255C76.0025 23.21 76.4522 23.151 76.8198 23.0789C77.3203 22.9808 77.6044 22.4737 77.497 21.9751L77.2692 20.9184C77.1501 20.366 76.5955 20.0403 76.0305 20.053C76.0036 20.0536 75.9765 20.054 75.9492 20.054C75.003 20.054 74.2439 19.7212 74.2439 18.203V10.9467C74.2439 10.3944 74.6916 9.94666 75.2439 9.94666H76.3946C76.9469 9.94666 77.3946 9.49894 77.3946 8.94666V8.03509Z"
            fill="#111827"
          />
          <path
            d="M86.8565 23.3191C90.0778 23.3191 92.427 21.9565 93.4326 19.7906C93.6857 19.2454 93.2755 18.6637 92.6781 18.5965L91.0611 18.4147C90.6064 18.3636 90.1901 18.6401 89.9287 19.0157C89.3006 19.9185 88.2285 20.3867 86.9085 20.3867C84.7911 20.3867 83.2958 19.1741 82.9227 17.0573C82.826 16.509 83.287 16.0505 83.8438 16.0505H92.9586C93.5109 16.0505 93.9586 15.6028 93.9586 15.0505V14.8963C93.9586 9.29156 90.5895 6.82713 86.6589 6.82713C82.0836 6.82713 79.0992 10.1858 79.0992 15.1147C79.0992 20.1267 82.042 23.3191 86.8565 23.3191ZM83.9004 13.5133C83.3261 13.5133 82.8586 13.0231 83.029 12.4747C83.5107 10.9244 84.8602 9.75949 86.7109 9.75949C88.5251 9.75949 89.8418 10.8715 90.2315 12.5126C90.3599 13.0536 89.8968 13.5133 89.3408 13.5133H83.9004Z"
            fill="#111827"
          />
        </svg>
      </a>
    </Link>
  )
}
