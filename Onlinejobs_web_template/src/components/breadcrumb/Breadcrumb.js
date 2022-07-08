import {} from './bread.css'
export const Breadcrumb = () => {
    return (
        <div >
        <nav  aria-label="breadcrumb">
        <br/>
            <ol class="breadcrumb">
              <li class="breadcrumb-item "><a href="#" class="decoration">Freelancer</a></li>
              <li class="breadcrumb-item "><a href="#" class="decoration" >Jobs</a></li>
              <li class="breadcrumb-item "><a href="#" class="decoration" >Browse All Jobs</a></li>
              <li class="breadcrumb-item " aria-current="page"> 1</li>
            </ol>
          </nav>
        
    </div>
    )
}