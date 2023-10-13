import { useEffect, useState } from "react";


// ----------------------------------------------------------------
/**
 * 1. useEffect(callback)
 * - Gọi callback mỗi khi Component re-render
 * 2. useEffect(callback,[])
 * - Chỉ gọi callback 1 lần mỗi khi component mounted
 * 3. useEffect(callback, [deps])
 * - Callback sẽ được gọi lại mội khi dependency thay dổi
 */
// ----------------------------------------------------------------
/**
 * Lưu ý:
 * Callback luôn được gọi khi Component mounted
 * Clean-up function luôn được gọi trước khi component unmounted
 */
function DemoUseEffect() {
    const tabs = ['posts', 'comments', 'albums'];
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/' + type)
            .then(resp => resp.json())
            .then(json => setPosts(json))
    }, [type])


    return (
        <div>
            {
                tabs.map(tab => <button
                    style={tab === type ? { color: '#fff', background: '#333' } : {}}
                    onClick={() => setType(tab)}
                    key={tab}
                >{tab}
                </button>)
            }
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id} >{post.title || post.email}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DemoUseEffect;