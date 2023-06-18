import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useLocation } from 'react-router-dom';
import Crumb from './Crumb';
import { getCrumbs } from './helpers/getCrumbs';
import { replaceLastCrumbName } from './helpers/replaceLastCrumb';

type BreadcrumbsBarProps = {
  lastCrumb: string
}

const BreadcrumbsBar = ({ lastCrumb }: BreadcrumbsBarProps) => {
  const loaction = useLocation()

  const homeCrumb = {
    name: "home",
    path: "/"
  }

  const dynamicCrumbs = getCrumbs(loaction.pathname)

  const crumbs = replaceLastCrumbName([homeCrumb, ...dynamicCrumbs], lastCrumb)

  return (
    <div className='h-6 pl-2'>
      {crumbs.length !== 1 &&
        <Breadcrumbs itemsAfterCollapse={2} aria-label="breadcrumb" >
          {crumbs.map((crumb, index) => {
            const last = index === crumbs.length - 1;
            return (
              <Crumb key={index} name={crumb.name} path={crumb.path} isLast={last} />
            )
          })}
        </Breadcrumbs>
      }
    </div >
  );
}

export default BreadcrumbsBar
