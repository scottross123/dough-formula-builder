type MagnifierIconProps = {
    color: string;
}

const MagnifierIcon = (props: MagnifierIconProps) => {
    const { color } = props;

    return(
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    );
}

export default MagnifierIcon;