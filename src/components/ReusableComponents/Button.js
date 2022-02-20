import Image from "next/image"
import PropTypes from "prop-types";

const Button = ({imageSrc, label, hrefLink, bgColor, textColor, moreStyle}) => {
    return (
        <button className={`p-3 ${bgColor} ${textColor} font-bold rounded-xl hover:bg-[#ecbc42] hover:shadow-md hover:shadow-[#39374d] transition ease-in hover:-translate-y-1 hover:scale-110 duration-200 mt-2 ${moreStyle} `}>
            <a href={hrefLink} className="flex items-center">
                { imageSrc ? <Image src={imageSrc} width={16} /> : ""} {label}
            </a>
        </button>
    )
}


Button.propTypes = {
    imageSrc: PropTypes.string,
    label: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    hrefLink: PropTypes.string,
    moreStyle: PropTypes.string,
};

Button.defaultProps = {
    imageSrc: null,
    label: "",
    bgColor: "bg-white ",
    textColor: "text-[#1f1e29]",
    hrefLink: "/",
    moreStyle: "",
};

export default Button