import { useRef } from "react";

export default function Ribbit2() {
    const headingsRef = useRef(null);

    const onResize = () => {
        const width = width.innerWidth;

        if(width < 600) {
            setLinkName("Link");
        }
    }
}
