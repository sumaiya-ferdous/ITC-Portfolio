import {Center, Column, Content, FlexColumn, GridResponsive, Section} from "../../components/UI/Containers";
import {Img, Wave} from "../../components/UI/Images";
import {IconHeading, Paragraph, ResponsiveTextLeft, Text} from "../../components/UI/Typography";
import {FaCheckCircle, FaQuoteLeft, FaUserFriends} from "react-icons/fa";
import Carousel, {CarouselSlide} from "../../components/UI/Carousel";
import {
    TESTIMONIAL_CONTENT_HEADING,
    TESTIMONIAL_CONTENT_TEXT,
    TESTIMONIAL_ID,
    TESTIMONIAL_LIST_TEXT,
    TESTIMONIALS
} from "../../assets/data";


export default function Testimony() {
    return (
        <Section id={TESTIMONIAL_ID} className={"bg-bgDark -mt-2"}>
            <Content className={"container mx-auto py-16"}>
                <ResponsiveTextLeft className={"lg:text-left text-center"}>
                    <IconHeading className={"md:justify-start justify-center"} prefix={<FaUserFriends/>}>
                        {TESTIMONIAL_CONTENT_HEADING}
                    </IconHeading>
                </ResponsiveTextLeft>
                <GridResponsive className={"lg:grid-cols-2 md:grid-cols-1 mt-32 gap-y-16"}>
                    <Column>
                        <Content className={""}>
                            <Carousel className={"xl:w-9/12 sm:w-8/12 xs:w-11/12 w-full lg:mx-0 lg:mr-auto"}
                                      navigation={false} autoplay={true} controls={false}>
                                {TESTIMONIALS.map((item, key) => (
                                    <CarouselSlide key={key}>
                                        <Content className={"bg-bgLight rounded-3xl w-[95%] mx-auto"}>
                                            <Content className={"py-10 px-8"}>
                                            <span className={"text-7xl"}>
                                                <FaQuoteLeft/>
                                            </span>
                                                <Text className={"xl:mt-12 lg:mt-10 md:mt-10 sm:mt-10 mt-8"}>
                                                    {item.text}
                                                </Text>
                                            </Content>
                                            <Content className={"bg-gray-500 -mt-1 rounded-3xl"}>
                                                <Wave className={"text-bgLight "}/>
                                                <Center className={"py-10 px-8"}>
                                                    <Content className={"md:h-28 md:w-28 h-24 w-24 bg-gray-200 rounded-full"}>
                                                        {item.image && <Img src={item.image}/>}
                                                    </Content>
                                                    <p className={"text-center text-gray-100 font-semibold md:text-2xl text-xl mt-2"}>{item.name}</p>
                                                </Center>
                                            </Content>
                                        </Content>
                                    </CarouselSlide>
                                ))}
                            </Carousel>
                        </Content>
                    </Column>
                    <Column className={"flex flex-col"}>
                        <Text className={"xl:mt-0 lg:mt-0 md:mt-0 mt-10"}>
                            {
                                TESTIMONIAL_CONTENT_TEXT
                            }
                        </Text>
                        <FlexColumn className={"justify-between lg:mt-20 md:mt-16 mt-5 flex-1"}>
                            {
                                TESTIMONIAL_LIST_TEXT.map((each, key) => (
                                    <Content key={key} className={"sm:max-w-xl lg:mx-0 sm:mx-auto lg:mt-0 mt-10"}>
                                        <h3 className={"flex items-center text-2xl font-semibold "}>
                                        <span
                                            className={"h-8 w-8 rounded-full grid place-items-center bg-emerald-500 text-white mr-3"}>
                                            <FaCheckCircle/>
                                        </span>
                                            {each.title}
                                        </h3>
                                        <Paragraph>
                                            {each.text}
                                        </Paragraph>
                                    </Content>
                                ))
                            }
                        </FlexColumn>
                    </Column>
                </GridResponsive>
            </Content>
        </Section>
    )
}