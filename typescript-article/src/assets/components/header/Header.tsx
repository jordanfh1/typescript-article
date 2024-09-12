import styles from './header.module.css'


export default function Header() {
return (    
    <>
    <nav>
        <p className={styles.p} >Jump to...</p>
        <ul className={styles.li}>

            <li ><a href="#welcome">Welcome</a></li>
            <li ><a href="#what-is-typescript">What is TypeScript?</a></li>
            <li ><a href="#why-use-typescript">Why use TypeScript?</a></li>
            <li ><a href="#setting-up-typescript">Setting up TypeScript</a></li>
        </ul>
 
    </nav>
    
    </>
)
}