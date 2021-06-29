import { Component } from "react";
import NextLink from 'next/link';

import ThemeButton from '@/components/ThemeButton'

function NavLink({ href, children }) {
    return (
        <NextLink href={href}>
            <a className="p-1 text-secondary dark:text-white sm:p-4">{children}</a>
        </NextLink>
    )
}

// Much of this code is taken from https://dev.to/guimg/hide-menu-when-scrolling-in-reactjs-47bj
export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prevScrollpos: null,
            visible: true
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const { prevScrollpos } = this.state;
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;
        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    };

    render() {
        return (
            <>
                <nav
                    className={`flex items-center justify-between w-full p-8 mx-auto my-0 bg-primary dark:bg-black navbar${this.state.visible ? "" : " navbar--hidden"}`}
                >
                    <a href="#skip" className="skip-nav">
                        Skip to content
                    </a>
                    <ThemeButton />
                    <div>
                        <NavLink href="/dashboard">Dashboard</NavLink>
                        <NavLink href="/blog">Blog</NavLink>
                        <NavLink href="/about">About</NavLink>
                        <NavLink href="/">Home</NavLink>
                    </div>
                </nav >
            </>
        );
    }
}