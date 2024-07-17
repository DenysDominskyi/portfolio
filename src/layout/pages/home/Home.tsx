import { Main } from './sections/Main'
import { Projects } from './sections/Projects'
import { Quote } from './sections/Quote'
import { Skills } from './sections/Skills'
import { About } from './sections/About'
import { Contacts } from './sections/Contacts'
import { Footer } from '../../footer/Footer'

export const Home = () => {
    return (<>
        <Main />
        <Quote />
        <Projects />
        <Skills />
        <About />
        <Contacts />
        <Footer />
    </>
    )
}
