import { useEffect } from "react"
import { useParams } from "react-router-dom"

import { CircularProgress } from "@mui/material"
import Grid from '@mui/material/Grid';

import { Carousel } from "./Carousel"
import { useCrumb } from "../../layout"
import Info from "./Info"
import Description from "./Description"
import DefaultImage from "../../components/DefaultImage"
import { useGetBookData } from "./hooks/useGetBookData"

const Book = () => {
  const { bookId } = useParams<{ bookId: string }>()

  //Fetch book data
  const { bookData, booksThisAuthor, isLoading } = useGetBookData(bookId || "")

  const {
    title,
    description,
    imageLinks,
  } = bookData || {};

  //Set last crumb to book title
  const { setCrumb } = useCrumb()

  useEffect(() => {
    setCrumb(bookData?.title || "")
    return () => {
      setCrumb("")
    }
  }, [bookData, setCrumb])

  return (<div className="h-full">
    {isLoading ?
      <div className="wh-full flex-center">
        <CircularProgress />
      </div>
      :
      < Grid container spacing={0} className="p-3 bg-white shadow-lg" >
        <Grid item xs={4} className="h-full p-2 flex-center">
          {/* Image display */}
          {imageLinks?.thumbnail ?
            <img className="h-52" src={imageLinks?.thumbnail} alt={title || ""} /> :
            <DefaultImage title={title} className="w-36 h-52" />
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
            <h2 className="text-center">
              Other books:
            </h2>
            {booksThisAuthor?.length > 0 ? <Carousel books={booksThisAuthor} />
              :
              <div className="h-full flex-center">
                <p>No other books by this author</p>
              </div>
            }
          </div>
        </Grid>
      </Grid >
    }
  </div>
  )
}


export default Book

