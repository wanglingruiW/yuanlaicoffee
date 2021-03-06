'use strict';

/******/(function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/var installedModules = {};
    /******/
    /******/ // The require function
    /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
            /******/return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
            /******/i: moduleId,
            /******/l: false,
            /******/exports: {}
            /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/__webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/__webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
            /******/Object.defineProperty(exports, name, {
                /******/configurable: false,
                /******/enumerable: true,
                /******/get: getter
                /******/ });
            /******/
        }
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
            return module['default'];
        } :
        /******/function getModuleExports() {
            return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/__webpack_require__.p = "";
    /******/
    /******/ // Load entry module and return exports
    /******/return __webpack_require__(__webpack_require__.s = 2);
    /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports) {

    module.exports = "<div class=\"container\"></div>";

    /***/
},
/* 1 */
/***/function (module, exports) {

    module.exports = "<header>    <div class=\"headerinner clear\">        <div class=\"logo_header\"></div>        <ul class=\"nav_header clear\">            <li><a>首页</a></li>            <li><a>订单</a></li>            <li><a>换桌</a></li>            <li><a>登录</a></li>            <li><a class=\"active\">欢迎</a></li>        </ul>    </div></header>";

    /***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

    var indexTpl = __webpack_require__(0);
    var headerTpl = __webpack_require__(1);
    var homeWelcomeTpl = __webpack_require__(3);

    var welcomeController = __webpack_require__(4);

    document.getElementById('root').innerHTML = indexTpl;
    document.querySelector('.container').innerHTML = headerTpl + homeWelcomeTpl;

    welcomeController.scroll();

    /***/
},
/* 3 */
/***/function (module, exports) {

    module.exports = "<!-- <div class=\"hr1\"></div> --><main>    <section class=\"wel_open\">        <article>            <!-- <span class=\"icon\"></span> -->            <h1>缘来咖啡</h1>            <p>18 Years,All For You</p>            <a href=\"\" class=\"btn_toindex\">开始点餐</a>        </article>        <div class=\"open_bg bg0\"></div>    </section>        <section class=\"wel_contain\">        <article>            <h1>悉心甄选</h1>        </article>        <div class=\"contain_bg bg1\"></div>    </section>    <section class=\"wel_contain\">        <article>            <h1>享你所想</h1>        </article>        <div class=\"contain_bg bg2\"></div>    </section></main><footer>    <div class=\"footerinner\">        <div class=\"logo_footer\"></div>        <article>            <div class=\"contact\">联系我们</div>            <p class=\"tel\">Tel: 010-28855688</p>            <p class=\"emall\">邮箱: contact@yuanlai.com</p>        </article>    </div></footer>";

    /***/
},
/* 4 */
/***/function (module, exports) {

    module.exports = {
        scroll: function scroll() {
            var obg0 = document.getElementsByClassName("bg0");
            var obg1 = document.getElementsByClassName("bg1");
            var osection = document.getElementsByTagName("section");
            var ofooter = document.getElementsByTagName("footer");

            window.onscroll = function () {
                var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
                // console.log(osection[0].offsetTop,osection[1].offsetTop,osection[2].offsetTop)
                if (scrolltop > osection[0].offsetTop && scrolltop < osection[1].offsetTop) {
                    var distance = scrolltop - osection[0].offsetTop;
                    // console.log(distance)
                    obg0[0].style.top = Math.floor(distance / 2) + "px";
                } else if (scrolltop > osection[1].offsetTop && scrolltop < osection[2].offsetTop) {
                    var distance = scrolltop - osection[1].offsetTop;
                    obg1[0].style.top = Math.floor(distance / 5.6) + "px";
                } else if (scrolltop > osection[2].offsetTop && scrolltop < ofooter[0].offsetTop) {
                    var distance = scrolltop - osection[2].offsetTop;
                    obg2[0].style.top = Math.floor(distance / 2) + "px";
                } else {
                    obg0[0].style.top = 0;
                    obg1[0].style.top = 0;
                    obg2[0].style.top = 0;
                }
            };
        }

        /***/ };
}]
/******/);