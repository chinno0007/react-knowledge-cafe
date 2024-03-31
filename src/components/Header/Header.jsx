import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center py-5 pt-10 mx-auto border-b-2 max-w-7xl'>
            <h1 className='text-5xl'>Knowledge Cafe</h1>
            <img src={profile} alt="" />

        </header>
    );
};

export default Header;