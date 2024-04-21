'use client'
import React, { useRef } from "react";
import { useInView } from "framer-motion";


const ArticleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-80% 0px ",
  });
  return (
    <section
          ref={ref}
          className="min-h-fit w-full  p-[32px] bg-neutral-100 rounded-[35px] "
          style={{
            transform: isInView ? "none" : "translateY(150px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
        >
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-xs md:text-base">
                With the rise of remote work, creating the perfect
                work-from-home setup has become increasingly important. A
                well-designed and thoughtfully organized workspace can
                significantly enhance productivity, focus, and overall
                well-being. In this article, we will explore practical tips and
                strategies to help you create the ideal work-from-home setup
                that balances functionality, comfort, and inspiration.
              </p>
            </div>
            {/*--- END FIRST PARAGRAPH ---*/}
            <ol className="w-full h-fit flex flex-col gap-8">
              <li>
                <p className="text-xs md:text-base">
                  <strong>Choose the Right Location: </strong>Selecting the
                  right location for your home office is crucial. Ideally, it
                  should be a dedicated space that offers privacy and minimal
                  distractions. Consider a well-lit area with natural light, as
                  it can boost mood and energy levels. Ensure the location has
                  enough space to accommodate your equipment, supplies, and
                  ergonomic furniture.
                </p>
              </li>
              {/*--- END PARAGRAPH #1 ---*/}
              <li>
                <p className="text-xs md:text-base">
                  <strong>Ergonomics for Health and Comfort: </strong> Investing
                  in ergonomic furniture is vital to maintain good posture and
                  prevent physical discomfort. Start with a comfortable chair
                  that provides proper lumbar support. Position your desk at the
                  correct height to allow for a neutral posture, with your feet
                  flat on the floor and your wrists in line with the keyboard.
                  Additionally, consider using a monitor stand to keep your
                  screen at eye level, reducing strain on your neck.
                </p>
              </li>
              {/*--- END PARAGRAPH #2 ---*/}
              <li>
                <p className="text-xs md:text-base">
                  <strong>Declutter and Organize:</strong>A clutter-free
                  workspace promotes clarity and focus. Keep only the essentials
                  on your desk, such as your computer, notebook, and a few
                  frequently used items. Utilize storage solutions like shelves,
                  drawers, or organizers to keep supplies and documents neatly
                  stored. Regularly declutter your workspace to maintain a clean
                  and organized environment.
                </p>
              </li>
              {/*--- END PARAGRAPH #3 ---*/}
              <li>
                <p className="text-xs md:text-base">
                  <strong>Prioritize Technology and Connectivity:</strong>A
                  reliable and efficient technology setup is essential for
                  remote work. Invest in a high-speed internet connection to
                  ensure smooth communication and uninterrupted workflow. Equip
                  yourself with a reliable computer or laptop, a good-quality
                  webcam, and noise-canceling headphones for virtual meetings
                  and calls. Consider using an external keyboard and mouse for
                  added comfort.
                </p>
              </li>
              {/*--- END PARAGRAPH #4 ---*/}
              <li>
                <p className="text-xs md:text-base">
                  <strong>Personalize and Inspire:</strong>Create a workspace
                  that reflects your personality and inspires creativity.
                  Surround yourself with items that motivate you, such as
                  artwork, plants, or meaningful quotes. Incorporate good
                  lighting, including a mix of ambient, task, and natural light,
                  to create a visually appealing and stimulating environment.
                  Experiment with colors that evoke focus and positivity, such
                  as blues or greens.
                </p>
              </li>
              {/*--- END PARAGRAPH #5 ---*/}
              <li>
                <p className="text-xs md:text-base">
                  <strong>Establish Boundaries:</strong> When working from home,
                  it is important to establish boundaries to maintain a healthy
                  work-life balance. Define set working hours and communicate
                  them to your family members or roommates to minimize
                  interruptions. Create physical or visual boundaries, such as a
                  closed door or a designated workspace, to signal your
                  availability or focus mode.
                </p>
              </li>
              {/*--- END PARAGRAPH #6 ---*/}
              <li>
                <p className="text-xs md:text-base">
                  <strong>Prioritize Wellness:</strong>Take care of your
                  physical and mental well-being while working from home.
                  Incorporate elements that promote relaxation, such as a
                  comfortable seating area or a designated space for stretching
                  and exercise. Schedule regular breaks to move around, hydrate,
                  and rejuvenate. Consider integrating mindfulness practices,
                  such as meditation or deep breathing exercises, to reduce
                  stress and increase focus.
                </p>
              </li>
              {/*--- END PARAGRAPH #7 ---*/}
            </ol>
            <div>
              <p className="text-xs md:text-base">
                <strong>Conclusion: </strong>
                Designing the perfect work-from-home setup requires thoughtful
                planning and consideration. By selecting the right location,
                prioritizing ergonomics, decluttering and organizing, leveraging
                technology, personalizing your space, setting boundaries, and
                prioritizing wellness, you can create an environment that
                enhances productivity, creativity, and overall well-being.
                Remember, your home office should be a space that supports and
                inspires you as you navigate the exciting world of remote work.
              </p>
            </div>
            {/*--- END CONCLUSION ---*/}
          </div>
        </section>
  )
}

export default ArticleSection