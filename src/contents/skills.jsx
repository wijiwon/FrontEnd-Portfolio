import { Wrapper, Heading } from '../components/common'
import { DiJavascript, DiNodejs, DiGithubBadge, DiMysql, DiPhotoshop } from 'react-icons/di'
import { FaAws, FaFigma, FaHtml5, FaNodeJs } from 'react-icons/fa6'
import {
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiExpress,
    SiReact,
    SiSolidity,
    SiTailwindcss,
    SiStyledcomponents,
} from 'react-icons/si'

const Skills = () => {
    return (
        <Wrapper>
            <Heading>기술 스택</Heading>
            <ul className="flex flex-col divide-y divide-gray-400">
                <li className="flex flex-row gap-[32px] py-[32px">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        언어
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiJavascript />
                                <span className="md:w-[120px]">Javascript</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>자바스크립트 실행 코드 환경을 설정하는 실행 컨텍스트에 대해 학습하였습니다.</li>
                                <li>
                                    서버와의 통신을 위한 비동기 처리를 이해하고 async/await을 사용해 비동기 작업을
                                    관리하였습니다.
                                </li>
                                <li>이벤트 루프에 대해 이해하여 비동기 코드를 처리하였습니다.</li>
                            </ul>
                        </li>

                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiTypescript />
                                <span className="md:w-[120px]">Typescript</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>Typescript의 환경 설정이 가능합니다.</li>
                                <li>코드의 안정성을 위해 interface로 객체의 구조를 정의하였습니다.</li>
                                <li>컴포넌트에 제네릭타입을 활용하여 재사용성을 높였습니다.</li>
                            </ul>
                        </li>
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiSolidity />
                                <span className="md:w-[120px]">Solidity</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>
                                    ERC20을 기반으로 한 스마트계약 코드를 구현하였으며 remix를 이용한 트랙잭션을
                                    배포하였습니다.
                                </li>
                                <li>Dex거래소의 구조를 숙지하였습니다.</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li className="flex flex-row gap-[32px] py-[32px]">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        프론트 앤드
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiReact />
                                <span className="md:w-[120px]">React</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>Lifecycle을 학습하여 React 동작 원리에 대해 이해하였습니다.</li>
                                <li>재사용성을 고려하여 컴포넌트 구성하려고 노력하고 있습니다.</li>
                                <li>redux를 이용한 간단한 전역 상태관리 경험이 있습니다.</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li className="flex flex-row gap-[32px] py-[32px]">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        백앤드
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <FaNodeJs />
                                <span className="md:w-[120px]">Node.js</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>Sequelize를 이용하여 데이터베이스를 관리하였습니다.</li>
                                <li>Express를 이용한 웹서버 통신이 가능합니다.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="flex flex-row gap-[32px] py-[32px]">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        etc
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <DiMysql />
                                <span className="md:w-[120px]">Mysql</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>Workbench 사용하여 DB 관리 가능</li>
                            </ul>
                        </li>
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline mt-4">
                            <span className="text-[16px] text-slate-600 md:text-[20px] basis-[20%] flex items-center gap-[8px]">
                                <SiTailwindcss />
                                <span className="md:w-[100px]">Tailwind</span>
                            </span>
                            <span className="text-[16px] text-slate-600 md:text-[20px] basis-[20%] flex items-center gap-[8px]">
                                <FaAws />
                                <span className="md:w-[100px]">AWS</span>
                            </span>
                            <span className="text-[16px] text-slate-600 md:text-[20px] basis-[20%] flex items-center gap-[8px]">
                                <DiPhotoshop />
                                <span className="md:w-[100px]">Photoshop</span>
                            </span>
                            <span className="text-[16px] text-slate-600 md:text-[20px] basis-[20%] flex items-center gap-[8px]">
                                <FaFigma />
                                <span className="md:w-[100px]">Figma</span>
                            </span>
                        </li>
                    </ul>
                </li>
            </ul>
        </Wrapper>
    )
}

export default Skills
