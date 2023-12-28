import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src='https://png.pngtree.com/png-clipart/20230207/original/pngtree-beauty-logo-design-png-image_8947095.png' alt=''/>
      </header>
        <nav className="nav">
            <div>
                <a href="#">Profile</a>
            </div>
            <div>
                <a href="#">Messages</a>
            </div>
            <div>
                <a href="#">News</a>
            </div>
            <div>
                <a href="#">Music</a>
            </div>
            <div>
                <a href="#">Settings</a>
            </div>
        </nav>
        <div className="content">
            <div>
                <img src="https://t3.ftcdn.net/jpg/03/57/96/98/360_F_357969833_OJe2ircqLJDBsBfE6rva63hpIBzK2vRG.jpg"/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                my posts
                <div>
                    new post
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
