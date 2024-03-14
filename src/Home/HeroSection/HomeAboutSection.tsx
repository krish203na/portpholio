import { AnimatePresence, motion, useScroll } from "framer-motion";


const HomeAboutSection = () => {
  const {scrollYProgress} = useScroll() 
  const scroll = scrollYProgress
  console.log(scroll)
  return (
    <>
    <AnimatePresence>
<motion.h1
>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi animi minus similique amet enim. Dolores dolorum cum repellat quam a reprehenderit quidem quisquam sed, vitae fugit adipisci placeat autem voluptatibus error facere ducimus, nam deleniti delectus ratione? Iste, earum! Consequuntur a harum vero rerum amet veniam quasi iure quia atque quis ipsam hic ipsum ad magnam possimus in expedita, asperiores nemo, inventore nobis architecto. Voluptas placeat fugit fugiat molestiae possimus necessitatibus ad ullam officia magnam at sit cum distinctio, architecto maiores tempore temporibus eos accusamus impedit ut magni non deserunt est asperiores? Quae libero, debitis at voluptas doloribus totam eligendi consequuntur architecto corrupti nulla accusantium odio, itaque obcaecati ducimus repudiandae iusto facilis aspernatur? Adipisci veritatis enim iusto praesentium. Veritatis exercitationem perferendis laboriosam vero officiis illum, sapiente quaerat perspiciatis harum quisquam fugit, quidem earum neque adipisci magnam architecto possimus autem placeat maxime corporis fuga tenetur? Obcaecati corporis perspiciatis repellat itaque quae debitis enim delectus illum nesciunt minus adipisci nemo asperiores sit odio, accusantium, eius ad quod deleniti! Obcaecati architecto blanditiis fugiat nesciunt doloribus tempore quia perspiciatis excepturi odit deleniti aspernatur totam nobis ratione laudantium mollitia, sint nostrum dolores accusantium! Eos sapiente aut saepe beatae delectus rem molestiae impedit, cumque voluptas dolore adipisci, placeat dicta ipsum odio. Atque ipsa tempore repudiandae neque, culpa ullam similique illo, assumenda fuga enim ea, rerum vitae. Doloremque ipsa animi sequi. Perspiciatis recusandae facilis dignissimos minima sint! Impedit quasi natus facilis cumque eaque adipisci? Veritatis temporibus facilis repellendus quod excepturi repudiandae quaerat, obcaecati harum officiis exercitationem dignissimos nam delectus placeat iure sit illum reprehenderit dolorem necessitatibus sint nihil hic, nobis non voluptatem quae. Quos, distinctio alias. Voluptatem, alias natus ut blanditiis eligendi iure tempore iste harum qui maxime suscipit impedit veritatis voluptatibus facilis quis reiciendis dolorum minus molestias voluptas laborum in incidunt? Aspernatur similique delectus consequatur quasi.
</motion.h1>
    </AnimatePresence>
    </>
  );
};

export default HomeAboutSection;
