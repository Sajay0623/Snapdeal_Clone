import { Stack, Text } from "@chakra-ui/react"
import { useState } from "react";
import styles from "./ComponentsCSS/Navbar.module.css"


const Body = () => {
    const [isShown, setIsShown] = useState(false)
    return (
        <Stack className={styles.sideContainer}  >
            <Stack className={styles.sideHead} >
                <Text onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>t1</Text>
                <Text onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>t2</Text>
                <Text onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>t3</Text>
                <Text onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>t4</Text>
                <Text onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>t5</Text>
                <Text onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>t6</Text>
            </Stack>
            {isShown && (
                <Stack className={styles.sideBody}
                    OnHover
                ></Stack>
            )}

        </Stack>
    )
}

export default Body