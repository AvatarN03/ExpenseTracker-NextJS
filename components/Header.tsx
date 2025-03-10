import { SignedIn, SignInButton, UserButton, SignedOut } from "@clerk/nextjs"
import { checkUser } from "@/lib/checkUser"
const Header = async() => {

    const user = checkUser();


  return (
    <nav className="navbar">
        <div className="navbar-container">
            <h2>Expense Tracker</h2>
            <div className="">
                <SignedOut>
                    <SignInButton/>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    </nav>
  )
}

export default Header