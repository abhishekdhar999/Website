function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();

  var main = document.querySelector('#main');
  var image = document.querySelector('#page1>img');

  main.addEventListener("mousemove",function(details){
    image.style.top = details.y * 0.05 + "px"
    image.style.left = details.x * 0.05 + "px"
  })

 const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)

        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});

const hide = document.querySelectorAll('.page') ;
hide.forEach((el)=> observer.observe(el));

const observerr = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
      console.log(entry)

      if(entry.isIntersecting){
          entry.target.classList.add('handshow');
      }
      else{
          entry.target.classList.remove('handshow');
      }
  });
});

const hand = document.querySelectorAll('#logo');
hand.forEach((el)=> observerr.observe(el));

 