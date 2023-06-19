import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - SnipShop`;
    }, [title])
}

export default useTitle;