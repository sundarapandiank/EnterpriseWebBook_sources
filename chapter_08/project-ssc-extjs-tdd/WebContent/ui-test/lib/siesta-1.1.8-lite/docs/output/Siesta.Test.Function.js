Ext.data.JsonP.Siesta_Test_Function({"tagname":"class","name":"Siesta.Test.Function","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Siesta.Test.Function","members":{"cfg":[],"property":[],"method":[{"name":"isCalled","tagname":"method","owner":"Siesta.Test.Function","meta":{},"id":"method-isCalled"},{"name":"isCalledNTimes","tagname":"method","owner":"Siesta.Test.Function","meta":{},"id":"method-isCalledNTimes"},{"name":"isntCalled","tagname":"method","owner":"Siesta.Test.Function","meta":{},"id":"method-isntCalled"},{"name":"methodIsCalled","tagname":"method","owner":"Siesta.Test.Function","meta":{},"id":"method-methodIsCalled"},{"name":"methodIsCalledNTimes","tagname":"method","owner":"Siesta.Test.Function","meta":{},"id":"method-methodIsCalledNTimes"},{"name":"methodIsntCalled","tagname":"method","owner":"Siesta.Test.Function","meta":{},"id":"method-methodIsntCalled"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":9,"files":[{"filename":"Function.js","href":"Function.html#Siesta-Test-Function"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":["Siesta.Test"],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Mixed into</h4><div class='dependency'><a href='#!/api/Siesta.Test' rel='Siesta.Test' class='docClass'>Siesta.Test</a></div><h4>Files</h4><div class='dependency'><a href='source/Function.html#Siesta-Test-Function' target='_blank'>Function.js</a></div></pre><div class='doc-contents'><p>This is a mixin, with helper methods for testing functionality relating to DOM elements. This mixin is consumed by <a href=\"#!/api/Siesta.Test\" rel=\"Siesta.Test\" class=\"docClass\">Siesta.Test</a></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-isCalled' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.Function'>Siesta.Test.Function</span><br/><a href='source/Function.html#Siesta-Test-Function-method-isCalled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.Function-method-isCalled' class='name expandable'>isCalled</a>( <span class='pre'>fn, host, desc</span> )</div><div class='description'><div class='short'>This assertion passes if the function is called at least one time during the test life span. ...</div><div class='long'><p>This assertion passes if the function is called at least one time during the test life span.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Function/String<div class='sub-desc'><p>The function itself or the name of the function on the host object (2nd argument)</p>\n</div></li><li><span class='pre'>host</span> : Object<div class='sub-desc'><p>The \"owner\" of the method</p>\n</div></li><li><span class='pre'>desc</span> : String<div class='sub-desc'><p>The description of the assertion.</p>\n</div></li></ul></div></div></div><div id='method-isCalledNTimes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.Function'>Siesta.Test.Function</span><br/><a href='source/Function.html#Siesta-Test-Function-method-isCalledNTimes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.Function-method-isCalledNTimes' class='name expandable'>isCalledNTimes</a>( <span class='pre'>fn, host, n, desc</span> )</div><div class='description'><div class='short'>This assertion passes if the function is called exactly (n) times during the test life span. ...</div><div class='long'><p>This assertion passes if the function is called exactly (n) times during the test life span.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Function/String<div class='sub-desc'><p>The function itself or the name of the function on the host object (2nd argument)</p>\n</div></li><li><span class='pre'>host</span> : Object<div class='sub-desc'><p>The \"owner\" of the method</p>\n</div></li><li><span class='pre'>n</span> : Number<div class='sub-desc'><p>The expected number of calls</p>\n</div></li><li><span class='pre'>desc</span> : String<div class='sub-desc'><p>The description of the assertion.</p>\n</div></li></ul></div></div></div><div id='method-isntCalled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.Function'>Siesta.Test.Function</span><br/><a href='source/Function.html#Siesta-Test-Function-method-isntCalled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.Function-method-isntCalled' class='name expandable'>isntCalled</a>( <span class='pre'>fn, host, n, desc</span> )</div><div class='description'><div class='short'>This assertion passes if the function is not called during the test life span. ...</div><div class='long'><p>This assertion passes if the function is not called during the test life span.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Function/String<div class='sub-desc'><p>The function itself or the name of the function on the host object (2nd argument)</p>\n</div></li><li><span class='pre'>host</span> : Object<div class='sub-desc'><p>The \"owner\" of the method</p>\n</div></li><li><span class='pre'>n</span> : Number<div class='sub-desc'><p>The expected number of calls</p>\n</div></li><li><span class='pre'>desc</span> : String<div class='sub-desc'><p>The description of the assertion.</p>\n</div></li></ul></div></div></div><div id='method-methodIsCalled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.Function'>Siesta.Test.Function</span><br/><a href='source/Function.html#Siesta-Test-Function-method-methodIsCalled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.Function-method-methodIsCalled' class='name expandable'>methodIsCalled</a>( <span class='pre'>fn, className, desc</span> )</div><div class='description'><div class='short'>This assertion passes if the class method is called at least one time during the test life span. ...</div><div class='long'><p>This assertion passes if the class method is called at least one time during the test life span.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Function/String<div class='sub-desc'><p>The function itself or the name of the function on the class (2nd argument)</p>\n</div></li><li><span class='pre'>className</span> : Function/String<div class='sub-desc'><p>The class constructor function or name of the class that contains the method</p>\n</div></li><li><span class='pre'>desc</span> : String<div class='sub-desc'><p>The description of the assertion.</p>\n</div></li></ul></div></div></div><div id='method-methodIsCalledNTimes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.Function'>Siesta.Test.Function</span><br/><a href='source/Function.html#Siesta-Test-Function-method-methodIsCalledNTimes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.Function-method-methodIsCalledNTimes' class='name expandable'>methodIsCalledNTimes</a>( <span class='pre'>fn, className, n, desc</span> )</div><div class='description'><div class='short'>This assertion passes when the supplied function is called exactly (n) times during the test life span. ...</div><div class='long'><p>This assertion passes when the supplied function is called exactly (n) times during the test life span.\nThe <code>className</code> parameter can be supplied as a class constructor function or as a string, representing the class\nname. In the latter case the <code>class</code> will be eval'ed to get a reference to the class constructor.</p>\n\n<p>This assertion is useful when testing for example an Ext JS class where event listeners are added during\nclass instantiation time, which means you need to observe the prototype method before instantiation.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Function/String<div class='sub-desc'><p>The function itself or the name of the function on the class (2nd argument)</p>\n</div></li><li><span class='pre'>className</span> : Function/String<div class='sub-desc'><p>The constructor function or the name of the class that contains the method</p>\n</div></li><li><span class='pre'>n</span> : Number<div class='sub-desc'><p>The expected number of calls</p>\n</div></li><li><span class='pre'>desc</span> : String<div class='sub-desc'><p>The description of the assertion</p>\n</div></li></ul></div></div></div><div id='method-methodIsntCalled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.Function'>Siesta.Test.Function</span><br/><a href='source/Function.html#Siesta-Test-Function-method-methodIsntCalled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.Function-method-methodIsntCalled' class='name expandable'>methodIsntCalled</a>( <span class='pre'>fn, className, desc</span> )</div><div class='description'><div class='short'>This assertion passes if the class method is not called during the test life span. ...</div><div class='long'><p>This assertion passes if the class method is not called during the test life span.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Function/String<div class='sub-desc'><p>The function itself or the name of the function on the class (2nd argument)</p>\n</div></li><li><span class='pre'>className</span> : Function/String<div class='sub-desc'><p>The class constructor function or name of the class that contains the method</p>\n</div></li><li><span class='pre'>desc</span> : String<div class='sub-desc'><p>The description of the assertion.</p>\n</div></li></ul></div></div></div></div></div></div></div>"});