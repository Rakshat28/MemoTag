import { motion } from 'framer-motion';
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Explore',
      items: ['About Us', 'MindMap', 'Caregivers', 'FAQ', 'Blogs', 'Testimonials'],
    },
    {
      title: 'Support',
      items: ['Documentation', 'Help Center', 'API Status', 'Contact Support'],
    },
    {
      title: 'Legal',
      items: ['Privacy Policy', 'Terms & Conditions', 'Cookie Policy', 'Licenses'],
    },
  ];

  const socialLinks = [
    { icon: <FiFacebook />, href: '#' },
    { icon: <FiTwitter />, href: '#' },
    { icon: <FiLinkedin />, href: '#' },
    { icon: <FiInstagram />, href: '#' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-gray-900 text-gray-300 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute -top-96 -left-96 w-[800px] h-[800px] opacity-5"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            d="M42.8,-59.3C54.5,-53.6,62.3,-39.9,67.6,-25.3C72.8,-10.6,75.5,5,71.1,17.8C66.7,30.6,55.2,40.6,42.8,49.4C30.4,58.2,17.2,65.8,1.7,63.6C-13.8,61.4,-27.6,49.5,-40.5,40.1C-53.4,30.7,-65.4,23.8,-70.1,13.3C-74.8,2.8,-72.3,-11.3,-65.3,-22.4C-58.4,-33.5,-46.9,-41.6,-35,-47.3C-23.1,-53,-11.6,-56.4,2.2,-59.5C15.9,-62.6,31.8,-65.5,42.8,-59.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 relative z-10">
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 5 }}
                    className="hover:text-blue-400 transition-colors"
                  >
                    <a href="#" className="text-sm">{item}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Get in touch</h3>
            <div className="space-y-3">
              <p className="text-sm">contact@memotag.io</p>
              <p className="text-sm">+91 8800506622</p>
              <div className="flex space-x-4 mt-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ scale: 1.2 }}
                    className="text-xl hover:text-blue-400 transition-colors"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-sm text-gray-400">
            ©2025 MemoTag. All Rights Reserved. 
            <span className="block md:inline mt-2 md:mt-0 md:ml-2">
              Designed & Developed by ProCohat Technologies Pvt. Ltd.
            </span>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            <a href="#" className="flex items-center">
              Try MemoTag <ChevronRightIcon className="h-4 w-4 ml-2" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;