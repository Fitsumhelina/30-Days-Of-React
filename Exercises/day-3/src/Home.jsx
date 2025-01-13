
function Home() {
    const techs = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
   
    return (
    <div>
        <img src="https://avatars.githubusercontent.com/u/151903384?v=4" alt="" id='profile_pic' />
        <h3>fitsum helina <span><img src="https://cdn-icons-png.flaticon.com/128/6270/6270515.png" alt="" id='bullet' /></span></h3>
        <ul id='ul'>
            {techs.map((tech, i) => {
                return <li key={i} id='li'>{tech}</li>
            })}
        </ul>
    </div>
  )
}

export default Home