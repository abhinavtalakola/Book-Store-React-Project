


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Spinner from '../components/Spinner';
// import { Link } from 'react-router-dom';
// import { AiOutlineEdit } from 'react-icons/ai';
// import { BsInfoCircle } from 'react-icons/bs';
// import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
// import BooksTable from '../components/home/BooksTable';
// import BooksCard from '../components/home/BooksCard';

// // Provide the URL of the online image
// const backgroundImageUrl = 'data:image/jpeg;base64,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';

// const Home = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [showType, setShowType] = useState('table');

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get('http://localhost:5555/books')
//       .then((response) => {
//         setBooks(response.data.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div
//       className='home-container'
//       style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//     >
//       <div className='overlay'></div>
//       <div className='content'>
//         <div className='flex justify-center items-center gap-x-4'>
//           <button
//             className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
//             onClick={() => setShowType('table')}
//           >
//             Table
//           </button>
//           <button
//             className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
//             onClick={() => setShowType('card')}
//           >
//             Card
//           </button>
//         </div>
//         <div className='flex justify-between items-center'>
//           <h1 className='text-3xl my-8'>Books List</h1>
//           <Link to='/books/create'>
//             <MdOutlineAddBox className='text-sky-800 text-4xl' />
//           </Link>
//         </div>
//         {loading ? (
//           <Spinner />
//         ) : showType === 'table' ? (
//           <BooksTable books={books} />
//         ) : (
//           <BooksCard books={books} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;
