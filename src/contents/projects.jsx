import { Wrapper, Heading } from '../components/common'
import { FaExternalLinkAlt, FaHardHat } from 'react-icons/fa'
import { DiJavascript, DiNodejs, DiGithubBadge, DiMysql } from 'react-icons/di'
import { SiExpress, SiReactquery, SiSocketdotio, SiSolidity, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { DiReact } from 'react-icons/di'
import useModal from '../hooks/useModal'
import Modal from '../components/modal'
import { FaAws, FaFigma } from 'react-icons/fa6'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import { Navigation, Pagination, A11y, Scrollbar } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

const Projects = () => {
    const [isShowingModal, toggleModal] = useModal()
    const [isShowingModal2, toggleModal2] = useModal()
    const [isShowingModal3, toggleModal3] = useModal()

    return (
        <Wrapper>
            <Heading>프로젝트</Heading>

            <ul className="flex flex-col w-full gap-[120px]">
                {/* 기업협약 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src={process.env.PUBLIC_URL + '/Bounswap.png'}
                            className="w-full"
                            alt="Bounswap 프로젝트"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀플 프로젝트 (5명)</li>
                            <li className="text-stone-500">2023. 11. 01 ~ 2023.12.04</li>
                            <li>front-end / aws 배포</li>
                            <li>
                                <button
                                    onClick={toggleModal}
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            Dex 거래소(협약 프로젝트){' '}
                            <a href="https://www.bounswap.site/" target="_blank">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            Uniswap의 분산형 자동화 마켓 메이커(AMM)를 기반으로 사용자에게 유동성과 다양한 수익창출의
                            기회를 제공하는 탈중앙화 거래소
                        </p>
                        <p className="leading-5 text-slate-950 text-[10px] md:text-[14px] md:leading-7 border-t-2">
                            Swap: 플랫폼 내 예치된 토큰을 자유롭게 교환
                        </p>
                        <p className="leading-5 text-slate-950 text-[10px] md:text-[14px] md:leading-7">
                            Liquidity: 사용자는 원하는 풀(Pool)에 자신이 가지고 있는 토큰을 페어로 자유롭게 예치 유동성
                            공급 비율에 따른 수익분배
                        </p>
                        <p className="leading-5 text-slate-950 text-[10px] md:text-[14px] md:leading-7">
                            Staking: 스테이킹 풀에 예치한 기간 & 토큰의 양에 비례하여 메인넷 코인을 보상으로 부여
                        </p>
                        <p className="leading-5 text-slate-950 text-[10px] md:text-[14px] md:leading-7">
                            Governance: 플랫폼에 기여하고 있는 유저들이 커뮤니티의 방향성에 대한 제안 및 투표로 의사를
                            표하고 결정을 내림
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiReact />
                            <SiReactquery />
                            <SiTypescript />
                            <SiTailwindcss />
                            <SiSolidity />
                            <FaHardHat />
                            <DiGithubBadge />
                            <FaFigma />
                            <FaAws />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>Figma를 활용한 사이트 UI 디자인</li>
                            <li>React + Typescript 및 Tailwind 환경설정</li>
                            <li>Dashboards, Details 페이지 제작 및 반응형 앱웹 구현</li>
                            <li>React-query를 활용한 전역 상태 관리</li>
                            <li>AWS S3를 활용한 정적 배포 진행</li>
                        </ul>
                    </div>
                </li>

                {/* 리액트 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img src={process.env.PUBLIC_URL + '/NoBroker.png'} className="w-full" alt="React 프로젝트" />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀플 프로젝트 (4명)</li>
                            <li className="text-stone-500">2023. 07. 28 ~ 2023. 08. 28</li>
                            <li>front-end, back-end</li>
                            <li>
                                <button
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                    onClick={toggleModal2}
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            NoBroker 부동산 매매 사이트{' '}
                            <a href="https://github.com/wijiwon/NoBroker" target="_blank">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            중개인 없이 매수인과 매도인이 직접 매물을 거래할 수 있는 부동산 매매 사이트
                        </p>
                        <p className="leading-5 text-slate-950 text-[10px] md:text-[14px] md:leading-7 border-t-2">
                            매물 등록: kakaomap API로 매물의 주소와 정보를 입력 받아 매물을 등록
                        </p>
                        <p className="leading-5 text-slate-950 text-[10px] md:text-[14px] md:leading-7">
                            매물 투표: 매물 금액에 비례한 최소 투표 수 이상으로 투표받고 찬성의 비율이 반대보다 높으면
                            매물 등록 승인
                        </p>
                        <p className="leading-5 text-slate-950 text-[10px] md:text-[14px] md:leading-7">
                            거래: 매수자가 매물 거래를 신청하면 매도자가 승인 후 사이트 내에서 계약서 발급
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiJavascript />
                            <DiReact />
                            <SiReactquery />
                            <DiNodejs />
                            <SiExpress />
                            <DiMysql />
                            <DiGithubBadge />
                            <FaAws />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>NASA Worldwind API를 사용해 사이트에 3D 지구 구현</li>
                            <li>회원가입, 로그인 페이지 구현 및 백엔드 기술 구현</li>
                            <li>axios를 활용한 서버-클라이언트 통신</li>
                            <li>Mysql workbench를 활용한 DB 관리</li>
                        </ul>
                    </div>
                </li>
                {/* 노드 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img src={process.env.PUBLIC_URL + '/painting.png'} className="w-full" alt="Node.js 프로젝트" />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀플 프로젝트 (4명)</li>
                            <li className="text-stone-500">2023. 06. 02 ~ 2023. 06. 26</li>
                            <li>front-end, back-end</li>
                            <li>
                                <button
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                    onClick={toggleModal3}
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            그림 일심 동체 게임사이트{' '}
                            <a href="https://github.com/wijiwon/Monami" target="_blank">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            게임에 참여중인 유저끼리 문제를 만들어 제시하고 랜덤으로 받은 제시어를 그림으로 표현하여
                            다른 유저가 그린 그림을 보고 제시어를 유추하는 게임.
                        </p>
                        <p className="leading-5 text-slate-950 text-[10px] md:text-[14px] md:leading-7 border-t-2">
                            게임: socket.io를 이용하여 접속중인 유저를 확인해 게임방에 접속한 유저끼리 동시에 게임을
                            진행. canvas를 이용해 그림을 그리고 다른 유저가 그린 그림을 확인.
                        </p>
                        <p className="leading-5 text-slate-950 text-[10px] md:text-[14px] md:leading-7">
                            게시판: 유저가 사진과 함께 올린 게시물에 댓글, 좋아요를 남겨 유저간 커뮤니케이션 가능.
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiJavascript />
                            <DiNodejs />
                            <SiExpress />
                            <SiSocketdotio />
                            <DiMysql />
                            <DiGithubBadge />
                            <FaAws />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>Canvas를 이용한 그림판 구현</li>
                            <li>게임 로직 구현</li>
                            <li>총괄 CSS 작업</li>
                        </ul>
                    </div>
                </li>
            </ul>

            <Modal show={isShowingModal} onCloseButtonClick={toggleModal}>
                <Swiper
                    className="h-[400px]"
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + '/Bounswap 1.png'} alt="Bounswap1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + '/Bounswap 2.png'} alt="Bounswap2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={process.env.PUBLIC_URL + '/Bounswap 3.gif'}
                            alt="Bounswap3"
                            className="h-full m-auto"
                        />
                    </SwiperSlide>
                </Swiper>
                <ul className="mt-5">
                    <li>
                        <span className="font-bold text-[18px]">프로젝트명</span> Bounswap (기업협약 Solidity Project)
                    </li>
                    <li>
                        <span className="font-bold text-[18px]">업무 기간</span> 2023.11.01 ~ 2023.12.05 (약 1개월)
                    </li>
                    <li>
                        <span className="font-bold text-[18px]">기술 스택</span> React, Typescript, Tailwind
                    </li>
                    <li>
                        <span className="font-bold text-[18px]">개발 인원</span> 5명 (contract 3명 / FE 2명)
                    </li>
                    <li>
                        <span className="font-bold text-[18px]">주요 업무</span> 프론트앤드 담당 (개발 환경설정, 페이지
                        구현 및 배포)
                        <ul className="ml-7 list-disc list-outside">
                            <li>
                                Tailwind를 활용한 페이지 구현: tailwind를 활용하여 컴포넌트 디자인 구현, dark 모드와
                                @media, hover 등의 기능을 활용한 반응형 앱웹 구현
                            </li>
                            <li>
                                React-query를 이용한 전역 상태 관리: react-query를 사용하여 비동기적으로 데이터를
                                동기화하고 업데이트를 시켜 dex 환경에 맞도록 포커싱될 때마다 데이터를 업데이트 할 수
                                있도록 구현
                            </li>
                            <li>AWS S3를 이용한 정적 배포: aws에서 s3, cloudFront를 이용하여 정적으로 빌드파일 배포</li>
                        </ul>
                    </li>
                </ul>
            </Modal>

            <Modal show={isShowingModal2} onCloseButtonClick={toggleModal2}>
                <Swiper
                    className="h-[400px]"
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + '/NoBroker 1.png'} alt="NoBroker1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + '/NoBroker 2.png'} alt="NoBroker2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + '/NoBroker 3.png'} alt="NoBroker3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + '/NoBroker 4.png'} alt="NoBroker4" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + '/NoBroker 5.png'} alt="NoBroker5" />
                    </SwiperSlide>
                </Swiper>
                <ul className="mt-5">
                    <li>
                        <span className="font-bold text-[18px]">프로젝트명</span> NoBroker (React Project)
                    </li>
                    <li>
                        <span className="font-bold text-[18px]">업무 기간</span> 2023.07.28 ~ 2023.08.28 (약 1개월)
                    </li>
                    <li>
                        <span className="font-bold text-[18px]">기술 스택</span> React, Javascript, Node.js, express,
                        Mysql, AWS
                    </li>
                    <li>
                        <span className="font-bold text-[18px]">개발 인원</span> 4명
                    </li>
                    <li>
                        <span className="font-bold text-[18px]">주요 업무</span> 프론트앤드, 백앤드 담당 (메인,
                        회원가입, 로그인 페이지 담당)
                        <ul className="ml-7 list-disc list-outside">
                            <li>
                                NASA Worldwind API를 활용한 3D 지구 구현. 원하는 좌표에 핀을 찍어 매물이 위치한 나라를
                                표시
                            </li>
                            <li>
                                회원가입 시, kakaoMap API를 활용하여 사용자의 거주지 입력과 multer를 활용해 사용자의
                                인감등의 증빙자료 첨부. Mysql을 활용하여 DB에 회원의 정보 저장.
                            </li>
                            <li>
                                jwt accessToken을 활용한 로그인 구현. jwt.verify를 활용한 로그인 상태를검증하는 미들웨어
                                구현.
                            </li>
                        </ul>
                    </li>
                </ul>
            </Modal>

            <Modal show={isShowingModal3} onCloseButtonClick={toggleModal3}>
                <Swiper
                    className="h-[400px]"
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + '/painting 1.gif'} alt="painting1" className="m-auto" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + '/painting 2.gif'} alt="painting2" className="m-auto" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + '/painting 3.gif'} alt="painting3" className="m-auto" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + '/painting 4.png'} alt="painting4" className="m-auto" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + '/painting 5.png'} alt="painting5" className="m-auto" />
                    </SwiperSlide>
                </Swiper>
                <ul className="mt-5">
                    <li>
                        <span className="font-bold text-[18px]">프로젝트명</span> 그림 일심 동체 (Node Project)
                    </li>
                    <li>
                        <span className="font-bold text-[18px]">업무 기간</span> 2023.06.02 ~ 2023.06.26 (약 3주)
                    </li>
                    <li>
                        <span className="font-bold text-[18px]">기술 스택</span> Javascript, Node.js, express, socket.io
                        Mysql, AWS
                    </li>
                    <li>
                        <span className="font-bold text-[18px]">개발 인원</span> 4명
                    </li>
                    <li>
                        <span className="font-bold text-[18px]">주요 업무</span> 프론트앤드, 백앤드 담당 (그림판,
                        게임로직, CSS 총괄 담당)
                        <ul className="ml-7 list-disc list-outside">
                            <li>
                                canvas를 이용한 그림판 제작 및 captureStream과 MediaRecorder을 이용한 그림 녹화 구현
                            </li>
                            <li>녹화된 미디어 데이터를 Blob객체로 DB에 저장</li>
                            <li>게임 로직 구현</li>
                        </ul>
                    </li>
                </ul>
            </Modal>
        </Wrapper>
    )
}

export default Projects
