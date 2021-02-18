const articles = [
  {
    id: 1,
    title: 'The Simple Truth About The Pay Gap',
    link: 'https://www.aauw.org/resources/research/simple-truth/',
    description:
      'Over half a century after pay discrimination became illegal in the United States, a persistent...',
    url:
      'https://www.aauw.org/app/uploads/2020/10/equal-pay-by-race_new-website_50-50_fall-2020_900x700_acf_cropped.png'
  },
  {
    id: 2,
    title: 'Gender Pay Gap Statistics for 2020',
    link: 'https://www.payscale.com/data/gender-pay-gap',
    description:
      'The gender pay gap is real, and it gets worse as women move up in their careers. Check out the...',
    url:
      'https://www.payscale.com/data/wp-content/uploads/sites/8/2020/03/GPG2020-Cover01-1680x633.jpg'
  },
  {
    id: 3,
    title: 'Quick Facts About The Gender Wage Gap',
    link:
      'https://www.americanprogress.org/issues/women/reports/2020/03/24/482141/quick-facts-gender-wage-gap/',
    description:
      'This fact sheet defines the gender wage gap, identifies what drives it, and quantifies its impact...',
    url:
      'https://cdn.americanprogress.org/content/uploads/2020/03/23105508/GenderWageGapFactSheet-1024x683.jpg'
  },
  {
    id: 4,
    title: `7 charts that show the glaring gap between men's and women's salaries in the US`,
    link: 'https://www.businessinsider.com/gender-wage-pay-gap-charts-2017-3',
    description:
      'The gender pay gap is still huge. These charts illustrate the discrepancies based on race, age...',
    url:
      'https://i.insider.com/5e8254d9671de011271f51f3?width=1000&format=jpeg&auto=webp'
  },
  {
    id: 5,
    title: 'The Status of Women in the States: 2015',
    link:
      'https://iwpr.org/iwpr-publications/report/the-status-of-women-in-the-states-2015/',
    description:
      'The Status of Women in the States: 2015 provides critical data to identify areas of progress for...',
    url: 'https://iwpr.org/wp-content/uploads/2020/06/cropped-young-women.jpg'
  },
  {
    id: 6,
    title: 'What is the gender pay gap and how is it different',
    link:
      'https://www.independent.co.uk/life-style/women/gender-pay-gap-equal-pay-women-paid-less-motherhood-a8856121.html',
    description:
      '2020 marks 50 years since the Equal Pay Act was made law, Olivia Petter looks at how the gender...',
    url:
      'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/05/10/istock-948860288.jpg?width=990'
  },
  {
    id: 7,
    title: 'Separate and unequal: Pay gap affects women, minorities, families',
    link:
      'https://cronkitenews.azpbs.org/2020/10/26/separate-and-unequal-pay-gap-affects-women-minorities-families/',
    description:
      'Women across the U.S. experience a pay gap that varies based on their location, job or race. The...',
    url:
      'https://cronkitenews.azpbs.org/wp-content/uploads/2020/10/women-earn-less-pay-gap-800x500-1.jpg'
  },
  {
    id: 8,
    title: 'Women are narrowing the gender wage gap',
    link:
      'https://www.pewsocialtrends.org/2020/01/30/womens-lead-in-skills-and-education-is-helping-narrow-the-gender-wage-gap/',
    description:
      'Jobs in which social, fundamental, analytical or managerial skills are more important pay better...',
    url:
      'https://www.pewsocialtrends.org/wp-content/uploads/sites/3/2020/01/PSDT_01.30.20_jobskills-02-00.png?resize=310,715'
  },
  {
    id: 9,
    title: 'Racial, gender wage gap persists in U.S.',
    link:
      'https://www.pewresearch.org/fact-tank/2016/07/01/racial-gender-wage-gaps-persist-in-u-s-despite-some-progress/ ',
    description:
      'Looking at gender, race and ethnicity combined, all groups, with the exception of Asian men, lag...',
    url:
      'https://www.pewresearch.org/wp-content/uploads/2016/06/FT_16.06.30_wageGaps_trend.png'
  },
  {
    id: 10,
    title: 'Our charts on Economic inequality by gender ',
    link: 'https://ourworldindata.org/economic-inequality-by-gender',
    description:
      'What is determining the inequality in incomes, jobs, and wealth between men and women?',
    url:
      'https://ourworldindata.org/exports/can-non-pregnant-and-non-nursing-women-do-the-same-jobs-as-men_v4_850x600.svg'
  },
  {
    id: 11,
    title:
      'The confidence gap predicts the gender pay gap among STEM graduates',
    link: 'https://www.pnas.org/content/117/48/30303',
    description:
      'Women make less than men in some science, technology, engineering, and math (STEM) fields...',
    url: 'https://www.pnas.org/content/pnas/117/48/30303/F1.medium.gif'
  },
  {
    id: 12,
    title: 'Addressing the Gender Wage Gap in the United States',
    link:
      'http://www.inquiriesjournal.com/articles/1324/addressing-the-gender-wage-gap-in-the-united-states-shortcomings-of-federal-legislation',
    description:
      'The most commonly cited statistic for the gender wage gap in the United States is that women...',
    url:
      'https://snworksceo.imgix.net/asp/9c2d38e2-defc-4b8d-be01-3afdb8a52b3a.sized-1000x1000.jpg?w=1000'
  },
  {
    id: 13,
    title: '3 Responses to "The Gender Pay Gap In Tech Report"',
    link: 'https://insights.dice.com/2020/03/05/gender-pay-gap-in-tech-report/',
    description:
      'Despite recent pushes for gender pay equality, issues persist in the tech industry. These gender...',
    url:
      'https://2e8ram2s1li74atce18qz5y1-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Dice-WiT-Social-vISocial-Img_wotext-1200x627-1024x535.jpg'
  },
  {
    id: 14,
    title: 'By The Numbers: What Pay Inequality Looks Like For Women In Tech',
    link:
      'https://www.forbes.com/sites/tanyatarr/2018/04/04/by-the-numbers-what-pay-inequality-looks-like-for-women-in-tech/?sh=54282db160b1',
    description:
      'Women in technology have a curious history. While women helped create the field of computer technology...',
    url:
      'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1061379650%2F960x0.jpg%3Ffit%3Dscale'
  },
  {
    id: 15,
    title: 'Gender Pay Gap in 2021: The Long and Winding Road to Parity',
    link:
      'https://www.moneyunder30.com/the-gender-pay-gap-in-the-21st-century ',
    description: `This International Women's Day, we bring you an in-depth analysis of the gender pay gap in 2021...`,
    url:
      'https://www.moneyunder30.com/wp-content/uploads/2019/03/Gender-Gap-648x364-c-default.jpg'
  },
  {
    id: 16,
    title: 'US tech still has a pay discrimination problem',
    link:
      'https://www.cnbc.com/2019/03/28/us-tech-still-has-a-pay-discrimination-problem-research-shows.html',
    description:
      'More than half of women in the U.S. tech sector are being paid less than their male counterparts...',
    url:
      'https://image.cnbcfm.com/api/v1/image/105782636-1552050253495gettyimages-928146780.jpeg?v=1552050310&w=740&h=416'
  },
  {
    id: 17,
    title: '5 Reasons the Gender Pay Gap Exists',
    link: 'https://futurewomen.com/hotlists/5-reasons-gender-pay-gap-exists/',
    description:
      'So you think the gender pay gap can be explained by career choice and motherhood? The reality is...',
    url:
      'https://futurewomen.com/wp-content/uploads/2018/10/FW1018_PayGapHEADer.gif'
  },
  {
    id: 18,
    title: '30+ Gender Pay Gap Statistics for 2021',
    link: 'https://builtin.com/recruiting/gender-pay-gap-statistics',
    description:
      'Understand the who, what, where and why behind the largely debated gender pay gap with 30+...',
    url:
      'https://builtin.com/sites/default/files/2020-01/gender-pay-gap-statistics-00.jpg'
  },
  {
    id: 19,
    title: 'The 2020 State of Pay Equity in the Tech Industry',
    link: 'https://blog.curocomp.com/state-of-pay-equity-in-tech-industry-2020',
    description:
      'Pay equity in tech and start ups is an ongoing topic in 2020. From understanding pay to getting...',
    url: 'https://blog.curocomp.com/hubfs/pay-equity-blog-piggy-bank.jpg'
  },
  {
    id: 20,
    title: 'The Real Reasons Behind the Gender Pay Gap',
    link:
      'https://timewise.co.uk/article/article-real-reasons-behind-gender-pay-gap/',
    description:
      'We explore the four key reasons why the gender pay gap exists, and explain the role that flexible...',
    url:
      'https://timewise.co.uk/wp-content/uploads/2018/04/gender-pay-equality-380x290.jpg'
  },
  {
    id: 21,
    title: 'Why is there a gender pay gap between men and women?',
    link:
      'https://www.fastcompany.com/90325308/why-are-women-still-making-so-much-less-than-men',
    description:
      'The gender pay gap is more complicated than many people believe. We spoke to women across...',
    url:
      'https://images.fastcompany.net/image/upload/w_1153,ar_16:9,c_fill,g_auto,f_auto,q_auto,fl_lossy/wp-cms/uploads/2019/04/p-1-why-are-women-still-making-so-much-less-than-men.jpg'
  },
  {
    id: 22,
    title: '20 Worst Paying Jobs for Women',
    link:
      'https://www.usatoday.com/story/money/careers/2018/12/05/gender-pay-gap-2018-worst-paying-jobs-women/38565069/',
    description:
      'Gender equality has taken a more central role in the American political and cultural discourse in recent years...',
    url:
      'https://www.gannett-cdn.com/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2018/11/19/USATODAY/usatsports/worst-paying-jobs-for-women-unhappy-lady.jpg?width=660&height=372&fit=crop&format=pjpg&auto=webp'
  },
  {
    id: 23,
    title: 'Almost Half Of Women In Tech Feel Gender Pay Gap Is Still...',
    link:
      'https://www.prnewswire.com/news-releases/almost-half-of-women-in-tech-feel-gender-pay-gap-is-still-an-issue-300971882.html ',
    description:
      '/PRNewswire/ -- Ivanti, the company that unifies IT to better manage and secure the digital workplace...',
    url:
      'https://mma.prnewswire.com/media/613276/IvantiLogo_Logo.jpg?p=publish&w=200'
  },
  {
    id: 24,
    title: 'Women in tech are still paid less than men in most US states',
    link:
      'https://www.techrepublic.com/article/women-in-tech-are-still-paid-less-than-men-in-most-us-states/',
    description:
      'With the salary differential reaching $16,000 in some regions, female techies remain at a...',
    url:
      'data:image/jpeg;base64,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'
  },
  {
    id: 25,
    title: 'Gender pay gap in Tech Remains “Significant,” Report Finds',
    link:
      'https://www.meritalk.com/articles/gender-pay-gap-in-tech-remains-significant-report-finds/',
    description:
      'Despite an increased focus on the gender imbalance in the tech workforce, a significant gender pay gap remains...',
    url:
      'https://www.meritalk.com/wp-content/themes/meritalk/images/header-meritalk.png'
  },
  {
    id: 26,
    title: 'Tech Industry: Men earn more than women',
    link:
      'https://www.techrepublic.com/article/men-still-earn-more-than-women-whites-earn-twice-as-much-as-black-and-hispanic-colleagues/',
    description:
      'The reveal of gender and race wage gaps in the tech industry was among the findings compiled...',
    url:
      'https://tr4.cbsistatic.com/hub/i/r/2020/10/20/a377d176-980e-4ce5-9293-4d047bdc696b/resize/770x/39bd63789116fdc4a89b3d5faa7f0ed2/istock-1174546497.jpg'
  },
  {
    id: 27,
    title: 'The Gender Pay Gap in Tech',
    link: 'https://www.itresourcescorp.com/the-gender-pay-gap-in-tech/',
    description: `Despite improvements, IT's gender pay gap remains above the national average with women...`,
    url:
      'https://726821.smushcdn.com/1275166/wp-content/uploads/2020/10/it-women-smiling-400x401.jpg?lossy=1&strip=1&webp=1'
  },
  {
    id: 28,
    title:
      'The gender wage gap is smaller in tech, but it will hurt the economy more',
    link:
      'https://www.vox.com/2019/4/2/18290482/gender-wage-tech-economy-hired',
    description: 'The gender wage gap in tech is bad for the economy',
    url:
      'https://cdn.vox-cdn.com/thumbor/lAQHkyxEUL7QEnQtApNC3IWkTxM=/0x0:3000x2000/920x613/filters:focal(1260x760:1740x1240):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63334333/929396162.jpg.0.jpg'
  }
]
// console.log(articles[0].title)
module.exports = articles
