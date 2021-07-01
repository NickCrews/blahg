import { Component } from "react";

import ThemeButton from '@/components/ThemeButton'
import Link from "@/components/HeaderFooterLink";

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
                    className={`flex items-center justify-between w-full p-8 mx-auto my-0 bg-primary navbar${this.state.visible ? "" : " navbar--hidden"}`}
                >
                    <a href="#skip" className="skip-nav">
                        Skip to content
                    </a>
                    <ThemeButton />
                    <div>
                        <Link href="/dashboard">Dashboard</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/about">About</Link>
                        <Link href="/">Home</Link>
                    </div>
                </nav >
            </>
        );
    }
}