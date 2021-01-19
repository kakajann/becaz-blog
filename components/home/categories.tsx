const cats = [
  {
    title: 'Bussiness',
  },
  {
    title: 'Design',
  },
  {
    title: 'Language',
  },
  {
    title: 'Lifestyle',
  },
  {
    title: 'Marketing',
  },
  {
    title: 'Personal Development',
  },
  {
    title: 'Programming & Development',
  },
  {
    title: 'Teacing & Academics',
  },
  {
    title: 'FAQ',
  },
  {
    title: 'Q&A',
  },
]
const HomeCategories = () => (
  <div id="categories">
    <a href="/" className="active">All Categories</a>
    {cats.map((category) => (
      <a href="/" key={category.title}>{category.title}</a>
    ))}
  </div>
)

export default HomeCategories
