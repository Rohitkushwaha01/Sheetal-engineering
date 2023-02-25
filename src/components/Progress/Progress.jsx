import {motion, useScroll, useSpring} from 'framer-motion';

export default function Progress() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress)

    return <motion.div style={{ scaleX}} className="bg-sky-600 h-1 sticky top-0 z-50"/>
}
