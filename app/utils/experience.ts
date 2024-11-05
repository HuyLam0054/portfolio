export interface iLangugeTag {
  name: string;
}
export interface iExperience {
  company_name: string;
  position: string;
  start_time: string;
  end_time: string;
  detail: string;
  language_tag: iLangugeTag[];
}
export interface iProject {
  project_name: string;
  url: string;
  img_url: string;
  start_time: string;
  end_time: string;
  detail: String;
  language_tag: iLangugeTag[];
}
export interface iProjectAnalytics {
  project_name: string;
  url_drive: string;
  data_url: string;
  img_url: string;
  start_time: string;
  end_time: string;
  detail: String;
}
export interface iAchievement {
  name: string;
  achievement: string;
  time: string;
  detail: string;
}
// Experience
export const experience: iExperience[] = [
  {
    company_name: "Oryza JSC",
    position: "Intern Frontend Developer",
    start_time: "02/2023",
    end_time: "05/2023",
    detail:
      "Implement frontend development for the Oryza Product website, knowing how to utilize hooks and data processing flows. Have experience working with various frameworks including Next.js. Additionally, gather and process data to build a Yolo model for traffic object detection.",
    language_tag: [
      { name: "Python" },
      { name: "HTML5" },
      { name: "CSS" },
      { name: "TypeScript" },
      { name: "JavaScript" },
    ],
  },
  {
    company_name: "ISC Quang Trung",
    position: "Intern AI Engineer",
    start_time: "11/2021",
    end_time: "02/2022",
    detail:
      "Learn more from machine learning, practice exercises related to machine learning and advanced mathematics in machine learning. Have experience in data analysis and building machine learning models.",
    language_tag: [{ name: "Python" }, { name: "YOLOv5" }],
  },
];
// applications
export const applications: iProject[] = [
  {
    project_name: "My Portfolio",
    url: "/",
    img_url: "/projects/portfolio.png",
    start_time: "1/2024",
    end_time: "present",
    detail:
      "My portfolio is built with Next.js 14, a powerful React-based framework that optimizes performance and SEO. The interface is designed with a minimalist style, focusing on content and user experience. My projects are detailed, along with personal information and professional skills. Utilizing the latest technologies, this portfolio is not only a showcase of my work but also a testament to my growth and creativity.",
    language_tag: [
      { name: "HTML5" },
      { name: "CSS" },
      { name: "typescript" },
      { name: "NextJs" },
    ],
  },
  {
    project_name: "Kindergarten Management Software",
    url: "/",
    img_url: "/projects/project1.png",
    start_time: "10/2023",
    end_time: "12/2023",
    detail:
      "Các chức năng mà website cần dễ quản lý thông tin Giao diện thiết kế hiện đại, dễ dàng sử dụng Áp dụng các công nghệ hổ trợ phù hợp để tăng tốt độ truy xuất của website tốt hơn Phù hợp với các nghiệp vụ quản lý của trường học",
    language_tag: [
      { name: "MERN" },
      { name: "HTML5" },
      { name: "CSS" },
      { name: "javascript" },
    ],
  },
];
// analytics
export const analytics: iProjectAnalytics[] = [
  {
    project_name: "BigBasket Products Dataset",
    url_drive:
      "https://drive.google.com/drive/folders/17cVXvAhhm417KBlWFh37NYg2IqpLkhHJ?usp=sharing",
    img_url:
      "https://www.startupinsider.in/wp-content/uploads/2022/09/Big-Basket2.jpg",
    data_url:
      "https://www.kaggle.com/datasets/chinmayshanbhag/big-basket-products",
    start_time: "8/2024",
    end_time: "present",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    project_name: "Walmart Dataset",
    url_drive:
      "https://drive.google.com/drive/folders/1sVEQBEBVEJZ_c5sTTJ_EY4-yAmFywKrC?usp=sharing",
    img_url:
      "https://storage.googleapis.com/kaggle-datasets-images/1820993/2970526/769a761b52ab6299355cb55bd92e018e/dataset-cover.jpg?t=2021-12-26-07-23-03",
    data_url: "https://www.kaggle.com/datasets/yasserh/walmart-dataset",
    start_time: "8/2024",
    end_time: "8/2024",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    project_name: "Netflix Dataset",
    url_drive:
      "https://drive.google.com/drive/folders/16ysjFFv0JMzZelj7woI6-pUy3R_eLW3m?usp=sharing",
    img_url:
      "https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/netflix-la-gi-1.png",
    data_url:
      "https://www.kaggle.com/datasets/ariyoomotade/netflix-data-cleaning-analysis-and-visualization",
    start_time: "8/2024",
    end_time: "8/2024",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
// Achievement
export const achievement: iAchievement[] = [
  {
    name: "Classification of lung CT scans using machine learning",
    achievement: "Department-level scientific research",
    time: "2023",
    detail:
      "The project is the result of applying machine learning to image analysis and classification to produce the desired results",
  },
  {
    name: "Outstanding Impact Idea Award in Information Security Competition",
    achievement: "Information Security Competition",
    time: "2023",
    detail:
      "Prize for Information Security Idea, project involves creating a virus capable of stealing user data through an .exe file extension.",
  },
];
