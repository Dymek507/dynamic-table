import { useParams } from "react-router-dom"
import { useFetchBook } from "../../hooks/useFetchBook"
import { BookData } from "../../types/global"
import { Carousel } from "./Carousel"
import { useCrumb } from "../../layout"
import { useEffect } from "react"
import Grid from '@mui/material/Grid';
import { getAuthorQuery } from "./helpers/getAuthorQuery"
import { useSwrFetcher } from "../../hooks/useSwrFetcher"
import { convertToBookData } from "../../utils/convertToBookData"
import Info from "./Info"
import Description from "./Description"
import ImageDisplay from "../../components/ImageDisplay/ImageDisplay"
import DefaultImage from "../../components/ImageDisplay/DefaultImage"

const Book = () => {
  const { bookId } = useParams<{ bookId: string }>()
  const bookData = useFetchBook(bookId) as unknown as BookData
  const { title, authors, publisher, publishedDate, description, pageCount, categories, imageLinks } = bookData || {}

  //Fetch books by this author
  const authorQuery = getAuthorQuery(authors?.[0]);
  const url = `q=inauthor:%22${authorQuery}%22`;
  const data = useSwrFetcher(url, authorQuery ? true : false);

  const booksThisAuthor = data?.items?.map((book: any): BookData => {
    return convertToBookData(book);
  });

  //Set last crumb to book title
  const { setCrumb } = useCrumb()

  useEffect(() => {
    setCrumb(bookData?.title || "")
    return () => {
      setCrumb("")
    }
  }, [bookData, setCrumb])

  return (
    <Grid container spacing={0} className="bg-[#f3f3f3] p-3">
      <Grid item xs={4} className="h-full p-2 flex-center">
        {/* Image display */}
        {imageLinks?.thumbnail ?
          <img className="h-5/6" src={imageLinks?.thumbnail} alt={title || ""} /> :
          <DefaultImage title={title} className="w-36" />
        }
      </Grid>
      <Grid item xs={8} className="pl-2">
        <Info book={bookData} />
      </Grid>
      <Grid item xs={12}>
        <Description description={description || ""} />
      </Grid>
      <Grid item xs={12}>
        {/* Other books display */}
        <div className="flex flex-col col-span-2 row-span-1">
          <h2 className="text-center">Books this Author:</h2>
          {booksThisAuthor?.length > 0 ? <Carousel books={booksThisAuthor} /> : <div className="h-full flex-center">
            <p>No other books by this author</p>
          </div>
          }
        </div>
      </Grid>
    </Grid>
  )
}

export default Book

// return (
//   <div className="grid h-4/5 grid-cols-[1fr_3fr] grid-rows-[1fr_3fr_3fr] text-2xl bg-sky-200 ">
//     {/* Image display */}
//     <div className="col-span-1 row-span-2 bg-red-500 flex-center">
//       <img className="h-5/6" src={imageLinks?.thumbnail} alt={title || ""} />
//     </div>
//     {/* Title display */}
//     <div className="col-span-1 row-span-1 pl-2 bg-green-500 flex-center">
//       <p className="text-slate-600">{title}</p>
//     </div>
//     {/* Info display */}
//     <div className="col-span-1 row-span-1 p-2 bg-blue-500">
//       <p className="text-sm">{description || "No description"}</p>
//     </div>
//     {/* Other books display */}
//     <div className="flex flex-col col-span-2 row-span-1 bg-yellow-500">
//       <h2 className="text-center">Books this Author:</h2>
//       {booksThisAuthor?.length > 0 ? <Carousel books={booksThisAuthor} /> : <div className="h-full flex-center">
//         <p>No other books by this author</p>
//       </div>
//       }
//     </div>
//   </div>
// )
// }