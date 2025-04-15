import { useState, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface BlogPost {
  id: number;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  image: string;
  link: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: 'Educational Articles',
    categoryColor: 'bg-green-600',
    title: 'The Role of Technology in Dementia Care',
    excerpt: 'Provide valuable information on dementia care, cognitive health, and wellness for caregivers and families.',
    image: 'application/public/assets/blog1.jpg',
    link: '/blog1'
  },
  {
    id: 2,
    category: 'Community Q&A',
    categoryColor: 'bg-blue-600',
    title: 'How to Set Up Geofencing for Added Safety',
    excerpt: 'Feature the top questions and discussions from the MemoTag caregiver community, offering advice, tips, and shared experiences.',
    image: 'application/public/assets/blog2.svg',
    link: '/blog2'
  },
  {
    id: 3,
    category: 'Product Updates',
    categoryColor: 'bg-amber-600',
    title: "MemoTag's Impact: Caregivers Share Their Success Stories",
    excerpt: "Share the latest developments on MemoTag's features, partnerships, and improvements.",
    image: 'application/public/assets/blog3.svg',
    link: '/blog3'
  },
  
];

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="h-full transition-transform duration-300 hover:scale-[1.02]">
      <a href={post.link} className="block h-full group">
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 h-full hover:shadow-md">
          <div className="p-1">
            <div className="relative overflow-hidden rounded-lg h-48">
              <img 
                src={post.image} 
                alt={post.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4">
                <span className={`${post.categoryColor} text-white text-xs font-medium px-3 py-1 rounded-full`}>
                  {post.category}
                </span>
              </div>
            </div>
            
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2 text-gray-800 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm line-clamp-3 mb-4">
                {post.excerpt}
              </p>
              <div className="flex justify-end">
                <div className="text-blue-600 font-medium flex items-center text-sm hover:text-blue-700">
                  Read more
                  <ChevronRightIcon className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

const BlogSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [postsPerView, setPostsPerView] = useState<number>(3);
  const blogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setPostsPerView(window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrevious = () => {
    setActiveIndex(prev => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setActiveIndex(prev => Math.min(prev + 1, blogPosts.length - postsPerView));
  };

  const visiblePosts = blogPosts.slice(activeIndex, activeIndex + postsPerView);

  return (
    <section className="relative bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 text-blue-600 bg-blue-50 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Insights & Updates
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Expert Perspectives on Dementia Care
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Essential reading for caregivers: Research updates, practical advice, and community experiences.
          </p>
        </div>

        <div className="hidden md:block relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visiblePosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePrevious}
              disabled={activeIndex === 0}
              className={`p-2 rounded-lg ${
                activeIndex === 0 ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              disabled={activeIndex >= blogPosts.length - postsPerView}
              className={`p-2 rounded-lg ${
                activeIndex >= blogPosts.length - postsPerView ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="md:hidden">
          <div className="overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide">
            <div className="flex space-x-4">
              {blogPosts.map(post => (
                <div key={post.id} className="w-80 flex-shrink-0">
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;