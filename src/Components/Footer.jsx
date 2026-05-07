function Footer() {
  const organizations = [
    { name: "Arts Excusion Unlimited", url: "https://www.artsexcursionsunlimited.com/" },
    { name: "Social Haptics Robotics & Education Lab", url: "https://shredlabcmu.github.io/" },
    { name: "Will Scott Consulting", url: "https://wscott02.wixsite.com/wscott02" },
  ]

  return (
    <footer className="mt-2 w-full bg-blue-200 border-gray-700  py-6 px-4 rounded-md">
      <div className="max-w-full mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Organizations Section */}
          <div className="flex flex-wrap gap-6 justify-start">
            {organizations.map((org, index) => (
              <a 
                key={index}
                href={org.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="!text-blue-800 hover:!text-blue-500 transition-colors text-sm"
              >
                {org.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-blue-500 text-sm">
            © {new Date().getFullYear()} Hazelwood Air Quality Monitor
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer