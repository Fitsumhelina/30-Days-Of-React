function Home() {
    const techs = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
   
    return (
    <div className="p-6 max-w-50 mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center gap-4">
        <img src="https://avatars.githubusercontent.com/u/151903384?v=4" alt="" className="rounded-full w-32 h-32"/>
        <h3 className="text-xl font-semibold">fitsum helina <span><img src="https://cdn-icons-png.flaticon.com/128/6270/6270515.png" alt="" className="inline-block w-4 h-4" /></span></h3>
        <ul className="list-none p-0 flex gap-5">
            {techs.map((tech, i) => {
                return (
                    <li key={i} className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-2 text-center cursor-pointer hover:bg-blue-700">
                        {tech}
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Home