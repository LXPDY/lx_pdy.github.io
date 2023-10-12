import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c,a as n,b as s,d as o,f as i}from"./app-86dcc0cf.js";const l={},u=i(`<h1 id="object-c学习日记" tabindex="-1"><a class="header-anchor" href="#object-c学习日记" aria-hidden="true">#</a> Object-C学习日记</h1><h2 id="日常篇" tabindex="-1"><a class="header-anchor" href="#日常篇" aria-hidden="true">#</a> 日常篇</h2><h4 id="_2023-10-10-object-c-的存在" tabindex="-1"><a class="header-anchor" href="#_2023-10-10-object-c-的存在" aria-hidden="true">#</a> 2023.10.10 Object-C++的存在</h4><p>在<code>Xcode</code>中直接创建一个macOS的命令行工程，尝试在其中添加CPP代码</p><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token comment">//test.mm</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">import</span> <span class="token expression"><span class="token operator">&lt;</span>Foundation<span class="token operator">/</span>Foundation<span class="token punctuation">.</span>h<span class="token operator">&gt;</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">import</span> <span class="token expression"><span class="token operator">&lt;</span>iostream<span class="token operator">&gt;</span></span></span>

class Test<span class="token punctuation">{</span>
   public<span class="token punctuation">:</span>
      <span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         std<span class="token punctuation">:</span><span class="token punctuation">:</span>cout<span class="token operator">&lt;&lt;</span> <span class="token string">&quot;hello world&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token punctuation">:</span><span class="token punctuation">:</span>endl<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">@interface</span> OCTest<span class="token punctuation">:</span>NSObject<span class="token punctuation">{</span>
   <span class="token keyword">@public</span>
   Test <span class="token operator">*</span>test_p<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>func<span class="token punctuation">:</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> num1 num2<span class="token punctuation">:</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> num2<span class="token punctuation">;</span>
<span class="token keyword">@end</span>

<span class="token keyword">@implementation</span> OCTest

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>func <span class="token punctuation">:</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> num1 num2<span class="token punctuation">:</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> num2<span class="token punctuation">{</span>
   test_p <span class="token operator">=</span> new <span class="token function">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   test_p<span class="token operator">-&gt;</span><span class="token function">func2</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">@end</span>


<span class="token keyword">int</span> <span class="token function">main1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">/* my first program in Objective-C */</span>
    OCTest <span class="token operator">*</span>ocTest <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>OCTest alloc<span class="token punctuation">]</span>init<span class="token punctuation">]</span><span class="token punctuation">;</span>
   <span class="token comment">//[sampleClass sampleMethod];</span>
   <span class="token punctuation">[</span>ocTest func<span class="token punctuation">:</span><span class="token number">1</span> num2<span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发现是无法在Xcode中直接编译运行的。对于混编代码，需要在<code>Xcode</code>侧边栏将文件扩展名更改为<code>.mm</code>类型后选择<code>Objec-C++</code>的类型才行。</p><p>Objc的代码中可以直接<code>import</code>C++的头文件，调用C++的函数来实现逻辑。但是Objc的原生类方法声明实现风格和C++书写风格迥异。</p><p>经过测试，Objc的文件也可以直接使用C++头文件中的类以及声明的函数，只需要在编译时选定它为Objc++的类型。</p><h4 id="_2023-10-12-object-c-block-objc版本的lambda表达式-block作返回值" tabindex="-1"><a class="header-anchor" href="#_2023-10-12-object-c-block-objc版本的lambda表达式-block作返回值" aria-hidden="true">#</a> 2023.10.12 Object-C Block，Objc版本的lambda表达式？block作返回值</h4><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token keyword">typedef</span> <span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">^</span>SeleFunc<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">@interface</span> OCTest<span class="token punctuation">:</span>NSObject
<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">^</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span>selectfunc<span class="token punctuation">;</span>
<span class="token keyword">@end</span>

<span class="token keyword">@implementation</span> OCTest

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">^</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span>selectfunc<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">^</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;MyTest : %d \\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">@end</span>
<span class="token keyword">int</span> <span class="token function">testblock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* my first program in Objective-C */</span>
    OCTest <span class="token operator">*</span>ocTest <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>OCTest alloc<span class="token punctuation">]</span>init<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">//[sampleClass sampleMethod];</span>
    <span class="token punctuation">[</span>ocTest selectfunc<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    SeleFunc blk <span class="token operator">=</span> <span class="token punctuation">[</span>ocTest selectfunc<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">blk</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code> (void (^)(int))</code> 这个就是<code>selectfunc</code>的返回值，表示返回值是一个返回值为void类型，参数为int的block（<s>是不是很绕，编程本质上就是套娃</s>）。在<code>[ocTest selectfunc]</code>这一步获得这个<code>block</code>以后，我们就可以直接执行它（<u>好像没有什么意义</u>），或者声明一对应个<code>block</code>类型的变量多次的执行它。</p><p><code>block</code>在形式上很像<code>C++</code>的<code>lambda</code>表达式，但或许功能上感觉花里胡哨一点。</p><h4 id="_2023-10-12-object-c底层研究" tabindex="-1"><a class="header-anchor" href="#_2023-10-12-object-c底层研究" aria-hidden="true">#</a> 2023.10.12 Object-C底层研究</h4>`,13),d={href:"https://cloud.tencent.com/developer/article/1136783",target:"_blank",rel:"noopener noreferrer"},r=n("p",null,[n("code",null,"xcrun -sdk iphoneos clang -arch arm64 -rewrite-objc 文件名 -o 输出的CPP文件"),s("在根目录用命令行可以将Objc文件编译成Cpp文件，我")],-1);function k(v,m){const a=t("ExternalLinkIcon");return p(),c("div",null,[u,n("p",null,[s("看了一篇文章"),n("a",d,[s("Objective-C的本质"),o(a)])]),r])}const f=e(l,[["render",k],["__file","Object-C学习日记.html.vue"]]);export{f as default};
