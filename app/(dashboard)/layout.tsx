const DashboardLayout = ({children}) => {
    return <div className="w-screen h-screen relative">
        <aside className="absolute top-0 left-0 border-r border-black/10"> Mood</aside>

        <div className="ml-[200px]">
        <header className="h-[60px] border-b border-black/10">Hell0</header>
<div>{children}</div>
        </div>
        </div>
}
export default DashboardLayout

