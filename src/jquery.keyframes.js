/* global $ */
import Keyframes from '@keyframes/core';

(() => {
    const doForEach = ($el, cb) => {
        $el.each((index, elem) => {
            cb(new Keyframes(elem));
        });
    };

    $.keyframe = {
        isSupported: Keyframes.isSupported,
        generate: Keyframes.generate,
        define: Keyframes.define,
    };

    $.fn.resetKeyframe = function (cb) {
        doForEach($(this), kf => kf.reset(cb));
    };

    $.fn.pauseKeyframe = function () {
        doForEach($(this), kf => kf.pause());
    };

    $.fn.resumeKeyframe = function () {
        doForEach($(this), kf => kf.resume());
    };

    $.fn.playKeyframe = function (frameOptions, callback) {
        doForEach($(this), kf => kf.play(frameOptions, callback));
    };
})();
